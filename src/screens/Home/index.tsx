import { styles } from "./styles";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { View, FlatList } from "react-native";
import React, { useState, useCallback } from "react";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { ListDivider } from "../../components/ListDivider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { useAuth } from "../../hooks/auth";
import { ModalSignOut } from "../../components/ModalSignOut";
import { ModalDeleteMatch } from "../../components/ModalDeleteMatch";

export function Home() {
  const { signOut } = useAuth();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [openModalSignOut, setOpenModalSignOut] = useState(false);
  const [openModalDeleteMatch, setOpenModalDeleteMatch] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [itemDelete, setItemDelete] = useState({} as AppointmentProps);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleOpenModalSignOut() {
    setOpenModalSignOut(true);
  }

  function handleCloseModalSignOut() {
    setOpenModalSignOut(false);
  }

  function handleOpenModalDeleteMatch(item: AppointmentProps) {
    setOpenModalDeleteMatch(true);
    setItemDelete(item);
  }

  function handleCloseModalDeleteMatch() {
    setOpenModalDeleteMatch(false);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  async function removeAppointments(item: AppointmentProps) {
    const index = appointments.indexOf(item);
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage = response ? JSON.parse(response) : [];
    storage.splice(index, 1);
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify(storage)
    );
    loadAppointments();
    setOpenModalDeleteMatch(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <>
      <Background>
        <View style={styles.header}>
          <Profile handleOpenModal={handleOpenModalSignOut} />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {loading ? (
          <Load />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            <FlatList
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleAppointmentDetails(item)}
                  onLongPress={() => handleOpenModalDeleteMatch(item)}
                >
                  <Appointment data={item} />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </Background>
      <ModalSignOut
        visible={openModalSignOut}
        closeModal={handleCloseModalSignOut}
        signOut={signOut}
      />
      <ModalDeleteMatch
        visible={openModalDeleteMatch}
        closeModal={handleCloseModalDeleteMatch}
        deleteMatch={() => removeAppointments(itemDelete)}
      />
    </>
  );
}
