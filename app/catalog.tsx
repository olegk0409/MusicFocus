import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import CategoryItem from "@/src/components/CategoryItem";
import GradientButton from "@/src/components/GradientButton";
import Header from "@/src/components/Header";
import withScreenLayout from "@/src/hoc/withScreenLayout";
import { soundsCategories } from "@/src/utills/data";
import { CatalogFilter } from "@/src/utills/types";
import { useCatalogStore } from "@/store/catalogStore";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Animated
} from "react-native";

const CatalogScreen = () => {
  const [activeFilter, setActiveFilter] = React.useState<CatalogFilter>('Categories');
  const [visibleFilter, setVisibleFilter] = React.useState<CatalogFilter>('Categories');
  const query = useCatalogStore((state) => state.query);
  const setQuery = useCatalogStore((state) => state.setQuery);
  const router = useRouter();
  
  const opacity = useRef(new Animated.Value(1)).current;
  const isCategories = activeFilter === 'Categories';
  const isVisibleCategories = visibleFilter === 'Categories';

  const toggleFilter = (pressedFilter: CatalogFilter) => {
    if (pressedFilter === activeFilter) return;

    setActiveFilter(pressedFilter);

    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisibleFilter(pressedFilter);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Find your track"/>

      <View style={styles.topContainer}>
        <TouchableOpacity 
          style={[styles.topButton, isCategories && styles.topButtonActive, styles.rightRaduis]}
          onPress={() => toggleFilter('Categories')}
        >
          <Text style={styles.topButtonText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.topButton, !isCategories && styles.topButtonActive, styles.leftRaduis]}
          onPress={() => toggleFilter('Search')}
        >
          <Text style={styles.topButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          styles.animatedContainer,
          { opacity: opacity },
        ]}
      >
        {isVisibleCategories ? (
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {soundsCategories.map((category, index) => (
              <CategoryItem key={category + index} name={category} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              value={query}
              placeholder="Enter sound name"
              placeholderTextColor={"#bfb8b0"}
              inputMode="text"
              onChangeText={(text) => setQuery(text.trim().toLowerCase())}
              maxLength={20}
              style={styles.input}
            />

            <GradientButton title="Search" press={() => router.push('/player')}/>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topButton: {
    padding: 16,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButtonActive: {
    backgroundColor: Colors.border
  },
  rightRaduis: {
    borderBottomRightRadius: 20
  },
  leftRaduis: {
    borderBottomLeftRadius: 20
  },
  topButtonText: {
    color: Colors.text,
    fontFamily: Fonts.textBold,
    fontSize: 20
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    gap: 20
  },
  inputContainer: {
    gap: 20,
    width: '80%',
  },
  input: {
    color: Colors.text,
    fontFamily: Fonts.text,
    fontSize: 30,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: Colors.fadeDark,
    padding: 10
  },
});

export default withScreenLayout(CatalogScreen)
