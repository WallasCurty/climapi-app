import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { COLORS_ENUM } from "../../common/ColorsEnum";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);



  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const toggleCreate = () => {
    setIsCreateOpen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.textDivider}>CLIMAPIAPP</Text>
      </View>
    </View>
  );
};
