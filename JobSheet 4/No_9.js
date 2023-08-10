const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // Gunakan method trim untuk menghapus spasi di awal dan akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`Kalimat setelah di-trim: ${kalimatTrimmed}`);
    rl.close();
});

// Gabungkan kata "Hello" dan "World" untuk membuat kalimat
    // $ node No_9.js
    // Masukkan sebuah kalimat: Hello World
    // Kalimat setelah di-trim: Hello World
