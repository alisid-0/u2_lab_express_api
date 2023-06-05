const db = require('../db')
const { Movie, Actor, Review} = require('../models')

const main = async () => {
    const willFerrell = new Actor(
        {
            name: "Will Ferrell",
            age: 55,
            isAlive: true,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Will_Ferrell_2012.jpg/220px-Will_Ferrell_2012.jpg'
        })
    await willFerrell.save()

    const willFerrellMovie1 = new Movie({
        title: 'Anchorman: The Legend of Ron Burgundy',
        runtime: 94,
        rating: '8/10',
        year_released: '2004',
        img: 'https://en.wikipedia.org/wiki/File:Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg',
        description: `The first installment in the Anchorman series, the film is a tongue-in-cheek take on the culture of the 1970s, particularly the new Action News format.  It portrays a San Diego television station where Ferrell's title character clashes with his new female counterpart.`
    })

    const willFerrellMovie2 = new Movie({
        title: 'Talladega Nights: The Ballad of Ricky Bobby',
        runtime: 108,
        rating: '10/10',
        year_released: '2006',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Talladega_nights.jpg',
        description: `Talladega Nights: The Ballad of Ricky Bobby is a 2006 American sports comedy film directed by Adam McKay who co-wrote the film with Will Ferrell.[2] It features Ferrell as the titular Ricky Bobby, an immature yet successful NASCAR driver.`
    })

    const willFerrellMovie3 = new Movie({
        title: 'Semi-Pro',
        runtime: 92,
        rating: '9/10',
        year_released: '2008',
        img: 'https://upload.wikimedia.org/wikipedia/en/2/24/Poster-premiere-semi-pro.jpg',
        description: `Semi-Pro is a 2008 American sports comedy film. The film was directed by Kent Alterman in his directorial debut, written by Scot Armstrong, and produced by Jimmy Miller. It stars Will Ferrell, Woody Harrelson, André Benjamin and Maura Tierney, set during the final season of the American Basketball Association and telling the story of a fictional ABA team desperate to survive the league's merger with the NBA.`
    })

    const willFerrellMovie4 = new Movie({
        title: 'Step Brothers',
        runtime: 107,
        rating: '5/7',
        year_released: '2010',
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg',
        description: `The Other Guys is a 2010 American buddy cop action comedy film directed by Adam McKay, who co-wrote it with Chris Henchy. It stars Will Ferrell and Mark Wahlberg with Eva Mendes, Michael Keaton, Steve Coogan, Ray Stevenson, Samuel L. Jackson and Dwayne Johnson in supporting roles.`
    })
    
    willFerrell.movies.push(willFerrellMovie1._id, willFerrellMovie2._id, willFerrellMovie3._id, willFerrellMovie4._id)
    willFerrellMovie1.actors.push(willFerrell._id)
    willFerrellMovie2.actors.push(willFerrell._id)
    willFerrellMovie3.actors.push(willFerrell._id)
    willFerrellMovie4.actors.push(willFerrell._id)
    await willFerrell.save()
    await willFerrellMovie1.save()
    await willFerrellMovie2.save()
    await willFerrellMovie3.save()
    await willFerrellMovie4.save()

    const reviewTalladegaNights1 = new Review({
        comment: 'Awesome movie that will have you bursting with laughter!',
        rating: "10/10"
    })
    reviewTalladegaNights1.movie = willFerrellMovie2._id
    await reviewTalladegaNights1.save()


    const reviewTalladegaNights2 = new Review ({
        comment: 'Horrible movie! Humor was very distateful and immature.',
        rating: "0/10"
    })
    reviewTalladegaNights2.movie = willFerrellMovie2._id
    await reviewTalladegaNights2.save()
    
    
    const jimCarrey = new Actor(
        {
            name: "Jim Carrey",
            age: 61,
            isAlive: true,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/220px-Jim_Carrey_2008.jpg'
        })
    await jimCarrey.save()

    const jimCarreyMovie1 = new Movie({
        title: 'Ace Ventura: Pet Detective',
        runtime: 86,
        rating: '10/10',
        year_released: '1994',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/84/Ace_ventura_pet_detective.jpg',
        description: `Ace Ventura: Pet Detective is a 1994 American comedy film starring Jim Carrey as Ace Ventura, an animal detective who is tasked with finding the abducted dolphin mascot of the Miami Dolphins football team.`
    })
    
    const jimCarreyMovie2 = new Movie({
        title: 'The Mask',
        runtime: 101,
        rating: '9/10',
        year_released: 1994,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Mask_%28film%29_poster.jpg/220px-The_Mask_%28film%29_poster.jpg',
        description: `The Mask is a 1994 American superhero comedy film directed by Chuck Russell and produced by Bob Engelman from a screenplay by Mike Werb and a story by Michael Fallon and Mark Verheiden. Loosely based on the comics published by Dark Horse Comics, it is the first installment in the Mask franchise.`
    })

    const jimCarreyMovie3 = new Movie({
        title: 'Dumb and Dumber',
        runtime: 106,
        rating: '7/10',
        year_released: 1994,
        img: 'https://upload.wikimedia.org/wikipedia/en/6/64/Dumbanddumber.jpg',
        description: `Dumb and Dumber is a 1994 American buddy comedy film directed by Peter Farrelly, who cowrote the screenplay with Bobby Farrelly and Bennett Yellin. It is the first installment in the Dumb and Dumber franchise.`
    })
    
    const jimCarreyMovie4 = new Movie({
        title: 'The Cable Guy',
        runtime: 96,
        rating: '8/10',
        year_released: 1996,
        img: 'https://discord.com/channels/1106209088758624372/1115353825805598810/1115360197439926273',
        description: `The Cable Guy is a 1996 American black comedy film directed by Ben Stiller, written by Lou Holtz Jr. and starring Jim Carrey and Matthew Broderick. In the film, Carrey plays an eccentric cable installer who becomes overly intrusive in the life of a customer, played by Broderick.`
    })

    const jimCarreyMovie5 = new Movie({
        title: 'How the Grinch Stole Christmas',
        runtime: 105,
        rating: '10/10',
        year_released: 2000,
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e7/How_the_Grinch_Stole_Christmas_film_poster.jpg',
        description: `Narrated by Anthony Hopkins, it stars Jim Carrey as the eponymous character, with Taylor Momsen, Jeffrey Tambor, Christine Baranski, Bill Irwin and Molly Shannon in supporting roles. The film centers on the Grinch, a misanthropic green creature who lives in a cave on nearby Mount Crumpit and despises the celebrations, as he attempts to sabotage their holiday plans in Whoville.`
    })

    jimCarrey.movies.push(jimCarreyMovie1._id, jimCarreyMovie2._id, jimCarreyMovie3._id, jimCarreyMovie4._id, jimCarreyMovie5._id)
    jimCarreyMovie1.actors.push(jimCarrey._id)
    jimCarreyMovie2.actors.push(jimCarrey._id)
    jimCarreyMovie3.actors.push(jimCarrey._id)
    jimCarreyMovie4.actors.push(jimCarrey._id)
    jimCarreyMovie5.actors.push(jimCarrey._id)
    await jimCarrey.save()
    await jimCarreyMovie1.save()
    await jimCarreyMovie2.save()
    await jimCarreyMovie3.save()
    await jimCarreyMovie4.save()
    await jimCarreyMovie5.save()

    const reviewAceVentura1 = new Review ({
        comment: 'A seriously GOOFY MOVIE! Absolutely amazing!',
        rating: '10/10'
    })
    reviewAceVentura1.movie = jimCarreyMovie1._id
    await reviewAceVentura1.save()

    const reviewAceVentura2 = new Review ({
        comment: 'Good movie with lots of laughs. Could be better.',
        rating: '7/10'
    })
    reviewAceVentura2.movie = jimCarreyMovie1._id
    await reviewAceVentura2.save()

    const jackieChan = new Actor(
        {
            name: "Jackie Chan",
            age: 69,
            isAlive: true,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/220px-Jim_Carrey_2008.jpg'
        })
        
    await jackieChan.save()

    const jackieChanMovie1 = new Movie ({
        title: 'Rumble in the Bronx',
        runtime: 90,
        rating: '9/10',
        year_released: 1996,
        img: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Rumble-in-the-Bronx-poster.jpg',
        description: 'Rumble in the Bronx (Chinese title: 紅番區, Hong Faan Kui (transl. Red Turn District)[6] is a 1995 American-Hong Kong martial arts film starring Jackie Chan, Anita Mui and Françoise Yip. It was directed by Stanley Tong, with action choreographed by Chan and Tong.'

    })

    const jackieChanMovie2 = new Movie ({
        title: 'Rush Hour',
        runtime: 98,
        rating: '10/10',
        year_released: 1998,
        img: 'https://upload.wikimedia.org/wikipedia/en/4/49/Rush_Hour_poster.png',
        description: "Rush Hour is a 1998 American buddy action comedy film directed by Brett Ratner and written by Jim Kouf and Ross LaManna from a story by LaManna. It stars Jackie Chan and Chris Tucker as mismatched police officers who are assigned to rescue a Chinese diplomat's abducted daughter."
    })

    const jackieChanMovie3 = new Movie ({
        title: 'Mulan',
        runtime: 87,
        rating: '9/10',
        year_released: 1998,
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Movie_poster_mulan.JPG',
        description: 'Mulan is a 1998 American animated musical adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures. Based on the Chinese legend of Hua Mulan, it is the 36th Disney animated feature film, and the ninth animated film produced and released during the Disney Renaissance'
    })

    const jackieChanMovie4 = new Movie ({
        title: 'Kung Fu Panda',
        runtime: 92,
        rating: '9/10',
        year_released: 2008,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Kungfupanda.jpg/220px-Kungfupanda.jpg',
        description: 'Kung Fu Panda is a 2008 American computer-animated martial arts comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. The first installment in the Kung Fu Panda franchise, it was directed by John Stevenson, in his feature directorial debut, co-directed by Mark Osborne and written by Jonathan Aibel and Glenn Berger, from a story by Ethan Reiff and Cyrus Voris.'
    })

    const jackieChanMovie5 = new Movie ({
        title: 'The Karate Kid',
        runtime: 140,
        rating: '8/10',
        year_released: 2010,
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Karate_kid_ver2.jpg' ,
        description: 'The plot concerns 12-year-old Dre Parker (Jaden Smith), from Detroit, Michigan, who moves to Beijing, China with his mother (Taraji P. Henson) and runs afoul of the neighborhood bully Cheng (Zhenwei Wang). He makes an unlikely ally in the form of an aging maintenance man, Mr. Han (Jackie Chan), a kung fu master who teaches him the secrets of self-defense. '
    })
    
    jackieChan.movies.push(jackieChanMovie1._id, jackieChanMovie2._id, jackieChanMovie3._id, jackieChanMovie4._id, jackieChanMovie5._id)
    jackieChanMovie1.actors.push(jackieChan._id)
    jackieChanMovie2.actors.push(jackieChan._id)
    jackieChanMovie3.actors.push(jackieChan._id)
    jackieChanMovie4.actors.push(jackieChan._id)
    jackieChanMovie5.actors.push(jackieChan._id)
    await jackieChan.save()
    await jackieChanMovie1.save()
    await jackieChanMovie2.save()
    await jackieChanMovie3.save()
    await jackieChanMovie4.save()
    await jackieChanMovie5.save()

    const reviewRushHour1 = new Review({
        comment: 'DYNAMIC DUO!! A must see movie that is packed with action and laughter.',
        rating: '10/10'
    })
    reviewRushHour1.movie = jackieChanMovie2._id
    await reviewRushHour1.save()

    const reviewRushHour2 = new Review({
        comment: "This movie is the complete package with fun for everyone in the family.",
        rating: '9/10'
    })
    reviewRushHour2.movie = jackieChanMovie2._id
    await reviewRushHour2.save()
    
    const daveChappelle = new Actor(
        {
            name: "Dave Chappelle",
            age: 49,
            isAlive: true,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dave_Chappelle_%2842791297960%29_%28cropped%29.jpg/220px-Dave_Chappelle_%2842791297960%29_%28cropped%29.jpg'
        })
        
    await daveChappelle.save()
    
    const daveChappelleMovie1 = new Movie ({
        title: "Robin Hood: Men in Tights",
        runtime: 104,
        rating: '6/10',
        year_released: 1993,
        img: 'https://upload.wikimedia.org/wikipedia/en/1/12/RobinHoodMeninTights_Poster.jpg',
        description: 'Robin Hood: Men in Tights is a 1993 adventure comedy film and a parody of the Robin Hood story.'
    })


    const daveChappelleMovie2 = new Movie ({
        title: 'The Nutty Professor',
        runtime: 96,
        rating: '8/10',
        year_released: 1996,
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Nutty_professor_ver1.jpg',
        description: 'The Nutty Professor is a 1996 American science fiction comedy film starring Eddie Murphy. It is a remake of the 1963 film of the same name.  A research scientist, academic, and lecturer, Klump develops a miraculous, but experimental, weight-loss pharmaceutical, and hoping to win the affection of the girl of his dreams, tests it upon himself.'
    })


    const daveChappelleMovie3 = new Movie ({
        title: 'Half Baked',
        runtime: 82,
        rating: '7/10',
        year_released: 1998,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Half-baked-dvd-cover.jpg/220px-Half-baked-dvd-cover.jpg',
        description: 'Half Baked is a 1998 American stoner comedy film starring Dave Chappelle, Jim Breuer, Harland Williams, and Guillermo Díaz.'
    })


    const daveChappelleMovie4 = new Movie ({
        title: 'Blue Streak',
        runtime: 93,
        rating: '9/10',
        year_released: 1999,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Blue_Streak_film_poster.jpg/220px-Blue_Streak_film_poster.jpg',
        description: 'Blue Streak is a 1999 American buddy cop action comedy film directed by Les Mayfield. Inspired by the 1965 film The Big Job, the film stars Martin Lawrence, Luke Wilson, Dave Chappelle, Peter Greene, Nicole Ari Parker and William Forsythe. Lawrence plays Miles, a jewel thief who tries to retrieve a diamond he left at a police station, whereupon he disguises himself as a detective and gets paired with a real policeman to investigate burglaries.'
    })


    const daveChappelleMovie5 = new Movie ({
        title: 'Undercover Brother',
        runtime: 88,
        rating: '7/10',
        year_released: 2002,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Undercover_Brother_poster.JPG/220px-Undercover_Brother_poster.JPG',
        description: 'The screenplay by John Ridley and Michael McCullers is based on the Internet animated series created by Ridley.'
    })

    daveChappelle.movies.push(daveChappelleMovie1._id, daveChappelleMovie2._id, daveChappelleMovie3._id, daveChappelleMovie4._id, daveChappelleMovie5._id)
    daveChappelleMovie1.actors.push(daveChappelle._id)
    daveChappelleMovie2.actors.push(daveChappelle._id)
    daveChappelleMovie3.actors.push(daveChappelle._id)
    daveChappelleMovie4.actors.push(daveChappelle._id)
    daveChappelleMovie5.actors.push(daveChappelle._id)
    await daveChappelle.save()
    await daveChappelleMovie1.save()
    await daveChappelleMovie2.save()
    await daveChappelleMovie3.save()
    await daveChappelleMovie4.save()
    await daveChappelleMovie5.save()

    
    const margotRobbie = new Actor(
        {
            name: "Margot Robbie",
            age: 32,
            isAlive: true,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped%29.jpg/220px-thumbnail.jpg'
        })    
    await margotRobbie.save()


    const margotRobbieMovie1 = new Movie ({
        title: "The Wolf of Wall Street Hood: Men in Tights",
        runtime: 180,
        rating: '9/10',
        year_released: 2013,
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png',
        description: "American biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, based on Jordan Belfort's 2007 memoir of the same name. It recounts Belfort's career as a stockbroker in New York City and how his firm, Stratton Oakmont, engaged in rampant corruption and fraud on Wall Street, leading to his downfall."
    })

    const margotRobbieMovie2 = new Movie ({
        title: 'The Legend of Tarzan',
        runtime: 110,
        rating: '7/10',
        year_released: 2016,
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e5/The_Legend_of_Tarzan_poster.jpg',
        description: 'The Legend of Tarzan is a 2016 adventure film directed by David Yates.[4] Based on the character Tarzan created by Edgar Rice Burroughs, the film stars Alexander Skarsgård, Samuel L. Jackson, Margot Robbie, Djimon Hounsou, Jim Broadbent, and Christoph Waltz. The story follows John Clayton (Tarzan), who, after moving to London, is convinced by George Washington Williams to return to his former home in the jungles of Africa, to investigate claims of slavery.'
    })

    const margotRobbieMovie3 = new Movie ({
        title: 'Suicide Squad',
        runtime: 123,
        rating: '8/10',
        year_released: 2016,
        img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Suicide_Squad_%282016_film%29_poster.png',
        description: 'Suicide Squad is a 2016 American superhero film based on the DC Comics supervillain/anti-hero team of the same name.  In the film, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat in exchange for reduced sentences.'
    })

    const margotRobbieMovie4 = new Movie ({
        title: 'Birds of Prey',
        runtime: 109,
        rating: '8/10',
        year_released: 2020,
        img: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg',
        description: 'Birds of Prey, is a 2020 American superhero film directed by Cathy Yan and written by Christina Hodson.  The film follows Harley Quinn, who, after breaking up with the Joker.'
    })

    const margotRobbieMovie5 = new Movie ({
        title: 'The Suicide Squad',
        runtime: 132,
        rating: '7/10',
        year_released: 2021,
        img: 'https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg',
        description: 'The Suicide Squad is a 2021 American superhero film based on the DC Comics team Suicide Squad. Produced by DC Films, Atlas Entertainment, and the Safran Company and distributed by Warner Bros. Pictures, it is a stand-alone sequel to Suicide Squad (2016) and the 10th film in the DC Extended Universe (DCEU).'
    })

    margotRobbie.movies.push(margotRobbieMovie1._id, margotRobbieMovie2._id, margotRobbieMovie3._id, margotRobbieMovie4._id, margotRobbieMovie5._id)
    margotRobbieMovie1.actors.push(margotRobbie._id)
    margotRobbieMovie2.actors.push(margotRobbie._id)
    margotRobbieMovie3.actors.push(margotRobbie._id)
    margotRobbieMovie4.actors.push(margotRobbie._id)
    margotRobbieMovie5.actors.push(margotRobbie._id)
    await margotRobbie.save()
    await margotRobbieMovie1.save()
    await margotRobbieMovie2.save()
    await margotRobbieMovie3.save()
    await margotRobbieMovie4.save()
    await margotRobbieMovie5.save()
}

const run = async () => {
    await main()
    db.close()
}

run()