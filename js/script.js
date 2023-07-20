let button = document.getElementById("button-submit");

// Add event listener click 
button.addEventListener("click", function (e) {
  e.preventDefault();

  // take and parse value 
  let tinggi = document.getElementById("tinggi").value;
  let bb = document.getElementById("bb").value;
  tinggi = parseInt(tinggi);
  bb = parseInt(bb);

  // validate value 
  let val = validate(tinggi,bb);

  //if its true then process the value
  if(val){
    calculate(tinggi,bb);

    const targetDivPosition = document.getElementById('result').getBoundingClientRect().top;

    // Calculate the current scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate the destination scroll position
    const destination = targetDivPosition + scrollY;

    // Scroll to the target div
    window.scrollTo({
     top: destination,
      behavior: 'smooth' 
    });
  }

  else {
    let res_con = document.getElementById('result');
    res_con.style.display = 'none';
  }

  

  
});

function validate(tinggi, bb){
  //check if the input is not nan 
  if(isNaN(tinggi) || isNaN(bb)){
    alert("Mohon diisi dengan format yang sesuai");
    return false;
  }
  return true;
}


function calculate(tinggi, bb){
  // calculate BMI
  let bmi = bb / (tinggi / 100) ** 2;
  bmi = bmi.toFixed(1);

  //declare message, color, and description for bmi result
  let msg = "";
  let color = "";
  let info = "";

  // add if-else condition for the bmi result
  if (bmi < 18.5) {
    msg = "Kekurangan berat badan";
    color = "blue";
    info=`<p>Anda berada dalam kategori kekurangan berat badan.
    Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.</p>
    <h3> Beberapa penyakit yang bisa timbul : </h3>
    <ul>
      <li>Infertilitas</li>
      <li>Anemia</li>
      <li>Osteoporosis</li>
      <li>Sistem Imun Lemah</li>
    </ul>`
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    msg = "Normal (ideal)";
    color = "green";
    info = `<p>Anda berada dalam kategori berat badan yang normal.Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.</p>`
  } else if (bmi >= 25 && bmi <= 29.9) {
    msg = "Kelebihan berat badan";
    color = "yellow";
    info = `<p>Anda berada dalam kategori overweight atau berat badan berlebih.
    Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.
    Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>
    <h3> Beberapa penyakit yang bisa timbul : </h3>
    <ul>
      <li>Diabetes</li>
      <li>Hipertensi</li>
      <li>Sakit Jantung</li>
      <li>Osteoarthritis</li>
    </ul>`

  } else {
    msg = "Kegemukan (Obesitas)";
    color = "red";
    info = `<p>Anda berada dalam kategori obesitas.Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.</p>
    <h3> Beberapa penyakit yang bisa timbul : </h3>
    <ul>
      <li>Diabetes</li>
      <li>Hipertensi</li>
      <li>Sakit Jantung</li>
      <li>Osteoarthritis</li>
    </ul>`;
  }

  // change style of container from none to flex to display the content 
  let res_con = document.getElementById('result');
  res_con.style.display = 'flex';

  // show the bmi and description to the content
  let res = document.getElementById("content");
  res.innerHTML = `
  <h1>Hasil BMI Anda: </h1>
  <h2 style="font-size:50px;"> ${bmi} </h2>
    <h3 style="color:${color}">${msg}</h3>`;

  let desc = document.getElementById("info");
  desc.innerHTML = `
    <h2>Keterangan</h2>
    ${info}
  `

  
}
