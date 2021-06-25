require("dotenv").config();
const Discord = require('discord.js');
const { type, userInfo } = require('os');
const { parse } = require('path');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log("Connected as " + client.user.username);

    let gen = client.channels.cache.get("857354385594908694");
    gen.send("To hear a joke type `?joke` or to hear a fact type `!fact`");

    const jokes = [
        'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
        '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
        'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
        'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
        'If you listen to a UNIX shell, can you hear the C?',
        'Why do Java programmers have to wear glasses? Because they do not C#.',
        'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
        'When Apple employees die, does their life HTML5 in front of their eyes?',
        'Without requirements or design, programming is the art of adding bugs to an empty text file.',
        'Before software can be reusable it first has to be usable.',
        'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
        'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
        'There are two ways to write error-free programs; only the third one works.',
        'Why was the math teacher late to work? She took the rhombus.',
        'Where do spiders seek health advice? WebMD.',
        'My daughter thinks I do not give her enough privacy. At least that is what she wrote in her diary.',
        'Why can not you trust an atom? Because they make up everything.',
        'What kind of car runs on leaves? An autumn-mobile!',
        'What did the duck say when she bought a lipstick? Put it on my bill!',
        'I just went to an emotional wedding. Even the cake was in tiers.',
      ];

      const facts = [
          'More human twins are being born now than ever before.',
          'The first person convicted of speeding was going eight mph.',
          '"New car smell" is the scent of dozens of chemicals.',
          'The world wastes about 1 billion metric tons of food each year.',
          'The severed head of a sea slug can grow a whole new body.',
          'Hair and nails grow faster during pregnancy.',
          'The smallest reptile in the world was first reported in 2021.',
          'The heads on Easter Island have bodies.',
          'The moon has moonquakes.',
          'Goosebumps are meant to ward off predators.',
          'Pineapple works as a natural meat tenderizer.',
          'Humans are the only animals that blush.',
          'The feeling of getting lost inside a mall is known as the Gruen transfer.',
          'The wood frog can hold its pee for up to eight months.',
          'The hottest spot on the planet is in Libya, with temperature reaching upto 136 degrees Fahrenheit.',
          'You lose up to 30 percent of your taste buds during flight.',
          'Your nostrils work one at a time.',
          'Rabbits can not puke.',
          'Cotton candy was invented by a dentist.',
          'Marie Curie is the only person to earn a Nobel prize in two different sciences.',
      ];

    client.on('message',(msg) => {
        if(msg.author === client.user)
            return;

        msg.channel.send("Message received from " + msg.author.toString() + " " + msg.content);

        if(msg.content === "?joke"){
            msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
        }

        else if(msg.content === "!fact"){ 
            msg.channel.send(facts[Math.floor(Math.random() * facts.length)])
        } 

        else{
            msg.channel.send("Invalid Command! Try again with `?joke` or `!fact` ");
        }
    });
});