var pendulum = 20;
var scooter = 20;
var hansi_hinterseer = 30;
var slipknot = 30;
var architects = 40;
var metrik = 40;
var rise_against = 50;
var linkin_park = 50;
var hans_zimmer = 100;
var stage1 = [pendulum, scooter, hansi_hinterseer];
console.log(stage1);
var stage2 = [slipknot, architects, metrik];
console.log(stage2);
var stage3 = [rise_against, linkin_park, hans_zimmer];
console.log(stage3);
var fest_day1 = (pendulum + slipknot + rise_against)
var fest_day2 = (scooter + architects + linkin_park)
var fest_day3 = (hansi_hinterseer + metrik + hans_zimmer)
console.log(fest_day1)
console.log(fest_day2)
console.log(fest_day3)
console.log("On the first day of the festival, I was lucky to watch bands 1, 2 and 3")
console.log("Then I watched the bands 1, 2 and 3 on the second day and it cost me " + fest_day2 + "€ in total that day")
var cost = (fest_day1 + fest_day2 + fest_day3)
console.log("I was a bit tired on the third day but it was so much worth it to watch the bands 1,2 3 and I spent " + cost + "€ for the three days of the festival")
var mat = (fest_day1 + fest_day2 + fest_day3)
var look = (mat / 100 * 30)
var rio = (mat - look)
console.log(look)
console.log(mat - look)
console.log("If I had booked the concert with enough time in advance, it would have cost me a total of " + rio + "€ and I would have saved " + look + "€")