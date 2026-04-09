// import SearchBar from '@/components/Searchbar'
import MovieCard from "@/components/MovieCard";
import { images } from "@/constants/images";
import React from "react";
import { FlatList, Image, View } from "react-native";



const search = () => {
  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item
          
        } />}
      />
    </View>
  );
};

export default search;

// const styles = StyleSheet.create({})
