import React from 'react'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack></GluestackUIProvider>
  );
}

export default RootLayout
