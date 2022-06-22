import axios from "axios";

export const storePetData = (petData) => {
  axios.post(
    "https://dognanny-59282-default-rtdb.firebaseio.com/pets.json",
    petData
  );
};
