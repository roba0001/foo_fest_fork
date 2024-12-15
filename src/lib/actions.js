import {supabase} from './supabase.js'
console.log(supabase)




// "use server";
// import { postInfo } from "@/lib/supabase";
// import { revalidatePath } from "next/cache";

// export default async function sendData(formData) {
//   console.log("form indsendt");
//   const data = {
//     area: formData.get("area"),
//     guestFirstName: formData.get("guestFirstName"),
//     guestLastName: formData.get("guestLastName"),
//     guestEmail: formData.get("guestEmail"),
//     guestPhone: formData.get("guestPhone"),
//   };
//   await postInfo(data);

//   revalidatePath("/");
// }
