const fs = require('fs');

fs.readFile('./user.csv', 'utf8', (err, csvdata) => {
        // console.log(err);
        csvdata.split('\r\n')
        .slice(1)
        .map(v => v.split(', '))
        .forEach((value)=>{
                [이름, 번호, 직업] = value;
                fs.mkdir(`./${이름}`, (err)=>{});
                userWriteData = `Username : ${이름} \nIdentifier : ${번호} \nJob : ${직업}`
                fs.writeFile(`./${이름}/userinfo.txt`, userWriteData, (err)=>{});
        });
});