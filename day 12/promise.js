/** @format */

// janji => kondisi (akhir tahun nikah kalau punya 1m )
//                 => terpenuhi  nikah
//                 => tidak terpenuhi ga jadi nikah
//                 => pacaran

const uang = "1m";

const janji = new Promise((resolve, reject) => {
  if (uang == "1m") resolve("nikah");
  else reject("ga jadi nikah");
});

//then
//catch
//finally
janji
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("pacaran"));

const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("success");
    else reject("error");
  }, 2000);
});

// tryPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally done"));

const fetchData = () => {
  const user = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json().then((users) => console.log(users[0]));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("always running"));
  user.id = 5; //modify

  console.log(user, "ini data user");
};

fetchData();

const async = () => {
  console.log("satu");
  tryPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

const sync = async () => {
  console.log("satu");
  await tryPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

sync();

// async();

// belajar
//     Promise = resolve, reject, waktu(terpenuhi,gagal)
//     async await = menunggu promise sampai selesai

const fetch2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users22"
    );
    const users = await response.json();
    users[0].id = 5;
    users[0].name = "naruto";
    delete users[0].address;
    delete users[0].phone;
    delete users[0].company;

    console.log(users[0], "test");
  } catch (err) {
    // console.log(err);
  }
};

fetch2();

console.log("hello");
