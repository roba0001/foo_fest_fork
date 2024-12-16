// supabase
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function postInfo(formData) {
  const response = await fetch(url, {
    method: "POST",
    headers: supabaseHeadersList,
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}

// FooFest API
// put reserve spot
const glitchHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default async function putReservation(reservationData) {
  const response = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();
  return data;
}

// post id
