import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { toscaColor } from "~/components/configs/Colors";
import FontAwesome from "~/components/Icons";

export default function DropDown({ getCurrentValue, items = [] }) {
  const [optionValue, setOptionValue] = useState("Pilih Kategori");
  const [currentValue, setCurrentValue] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const OptionHandler = ({ value, label }) => {
    setOptionValue(label);
    setCurrentValue(value);
    setOpen(!isOpen);
  };

  useEffect(() => {
    getCurrentValue(currentValue);
  }, [currentValue]);

  //   const items = [
  //     { value: "1", label: "Option A" },
  //     { value: "2", label: "Option B" },
  //     { value: "3", label: "Option C" },
  //     { value: "4", label: "Option D" },
  //     { value: "5", label: "Option E" },
  //     { value: "6", label: "Option F" },
  //     { value: "7", label: "Option G" },
  //     { value: "8", label: "Option H" },
  //   ];

  return (
    <View style={{ maxHeight: 350, zIndex: 2000 }}>
      <TouchableNativeFeedback onPress={() => setOpen(!isOpen)}>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: isOpen ? 0 : 10,
            borderBottomRightRadius: isOpen ? 0 : 10,
            backgroundColor: "white",
            justifyContent: "space-between",
            borderBottomWidth: isOpen ? 1 : 0,
            borderBottomColor: isOpen && "lightgrey",
          }}
        >
          <Text
            style={{
              color: "#234",
              fontSize: 16,
            }}
          >
            {optionValue}
          </Text>
          <FontAwesome
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={16}
            color={"grey"}
          />
        </View>
      </TouchableNativeFeedback>

      {isOpen && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            maxHeight: 300,
            backgroundColor: "white",
          }}
        >
          {items?.map((val, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => OptionHandler(val)}
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, padding: 16 }}>{val.label}</Text>
              <Text style={{ fontSize: 16, padding: 16 }}>
                {currentValue == val.value ? "Y" : ""}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
