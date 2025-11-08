import readline from 'readline';
import fs from 'fs';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fileCreation = () => {
    rl.question('Enter the filename to create: ', (filename) => {
        rl.question('Enter the content for the file: ', (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.log(`Error creating file: ${err.message}`);
                } else {
                    console.log(`File "${filename}.txt" created successfully.`);
                }
                rl.close();
            });
        });
    });
}
fileCreation();
