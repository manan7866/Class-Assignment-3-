function capset (sentence : string){
    console.log(sentence.toUpperCase());
    console.log(sentence.toLowerCase());
    console.log(sentence.charAt(0).toUpperCase()+sentence.slice(1))
      let titles = sentence.split(" ");
    let word : string=""
    for (let i = 0 ; i <titles.length; i++){
        let title = titles[i]
        let firtup= title.charAt(0).toUpperCase()
        let charslow = title.slice(1).toLowerCase()

        let bond = firtup + charslow
        word = bond + ''
        console.log(word)


    }




}

capset("abdul manan wighio")