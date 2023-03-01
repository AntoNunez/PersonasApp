import { useRef } from "react"
import { Animated, Easing } from 'react-native';


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(-100)).current

    const fadeIn =(duration:number = 300)=>{
        Animated.timing(
            opacity,
            {
               toValue:1,
               duration,
               useNativeDriver:true 
            }
        ).start();

        Animated.timing(
            top,
            {
                toValue:1,
               duration: 300,
               useNativeDriver:true,
               easing: Easing.bounce
            }
        ).start();
    }
  
    return {
        opacity,
        top,
        fadeIn
    }
   
  
}
