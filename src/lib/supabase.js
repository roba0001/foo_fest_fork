import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key)
console.log(url, key)


// const headersList = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   apikey: key,
//   Prefer: "return=representation",
// };

// export async function getInfo() {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();
//   return data;
// }

// export async function postInfo(formData) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify(formData),
//   });

//   const data = await response.json();
//   return data;
// }
