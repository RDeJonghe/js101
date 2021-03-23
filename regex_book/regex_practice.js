// example of special meta character with syntatical meaning, need \

// let str = '? What\'s up, doc? Silence! "What\'s that?"';

// console.log(str.match(/[\?]/g));
// console.log(str.match(/\?/g)); need to learn the difference between using the brackets and not

// let str = 'chris:x:300 A thought; no, forget it. ::::';

// console.log(str.match(/:/g));
// console.log(str.match(/ /g));
// console.log(str.match(/\./));

// let str = 'cat catalog copycat scatter the lazy cat. CAT cast'

// console.log(str.match(/cat/g));

// let str = 'The lazy cat.'
// let str2 = 'The dog barks.'
// let str3 = 'Down the rabbit hole.'
// let str4 = 'The lazy cat, chased by the barking dog,'
// let str5 = 'dives down the rabbit hole.'
// let str6 = 'catalog'
// let str7 = 'The Yellow Dog'
// let str8 = 'My bearded dragon\'s name is Darwin'

// let regex = /(cat|dog|rabbit)/gi; // no spaces between | symbol! if there is a space it looks for a space

// // console.log(str.match(/(dog | cat | rabbit)/));
// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));
// console.log(str4.match(regex));
// console.log(str5.match(regex));
// console.log(str6.match(regex));
// console.log(str7.match(regex));
// console.log(str8.match(regex));

// let str = '(cat|dog)';
// console.log(str.match(/\(cat\|dog\)/))
// let text = 'Back   once     again';

// if (str.match(/\t/)) {
//   console.log('has tab');
// }
// console.log(text.match(/\t/));
// if (text.match(/\t/)) {
//   console.log("has tab");
// }

// let str = 'Kx';
// let str2 = 'BlacK';
// let str3 = 'kelly';

// let regex = /K/;

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));

// let str = 'Henry'
// let str2 = 'perch'
// let str3 = 'hgolf H'

// // let regex = /h/i;
// let regex = /(h|H)/g;

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));

// let str = 'snapdragon'
// let str2 = 'bearded dragon'
// let str3 = 'dragoon'

// let regex = /dragon/;

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));

// let regex = /(banana|apple|orange|strawberry)/;

// let str = 'banana';
// let str2 = 'orange';
// let str3 = 'pineapples';
// let str4 = 'strawberry';
// let str5 = 'rasberry';
// let str6 = 'grappler';

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));
// console.log(str4.match(regex));
// console.log(str5.match(regex));
// console.log(str6.match(regex));

// let str = 'This line has spacesThis,line,has,commas,No-spaces-or-commas';

// let regex = /( |,)/g;
// console.log(str.match(regex));

// let str = 'blueberry';
// let str2 = 'blackberry';
// let str3 = 'black berry';
// let str4 = 'strawberry';

// let regex = /(blue|black)berry/;

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));
// console.log(str4.match(regex));

// let str = 'Four score + seven';

// let regex = /[Fse]/
// let regex2 = /[e+]/
// let regex3 = /[abAB]/
// let regex4 = /[*+]/

// console.log(str.match(regex))
// console.log(str.match(regex2))
// console.log(str.match(regex3))
// console.log(str.match(regex4))

// let regex = /[abc][12]/g;

// let str = 'a2'
// let str2 = 'Model 640c1'
// let str3 = 'a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3'

// console.log(str.match(regex))
// console.log(str2.match(regex))
// console.log(str3.match(regex))

// let regex = /[a-f][A-F]/g;
// let regex2 = /[a-fA-F]/g;

// let str = 'BaCk oncE agAiN';

// console.log(str.match(regex));
// console.log(str.match(regex2));

// let regex = /[^y]/g;

// let str = 'yes'
// let str2 = 'a'
// let str3 = 'by'
// let str4 = '+/-'
// let str5 = 'ABCXYZ'
// let str6 = 'y'
// let str7 = 'yyyyy'
// let str8 = 'yyayy'

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));
// console.log(str4.match(regex));
// console.log(str5.match(regex));
// console.log(str6.match(regex));
// console.log(str7.match(regex));
// console.log(str8.match(regex));

// let regex = /[^aeiou]/g;

// let str = 'Four Score And Seven'
// let str2 = 'abcdefghijklmnopqrstuvwxyz'
// let str3 = '123 hello +/* bye'

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));


// let text = 'xyx';
// if (text.match(/[^x]/)) {
//   console.log('matched');
// } else {console.log('not matched')}

// Write a regex that matches uppercase or lowercase Ks or a lowercase s. Test it with these strings:
// let str = 'Kitchen Kaboodle'
// let str2 = 'Reds and blues'
// let str3 = 'kitchen Servers'

// let regex = /[Kks]/g;

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));

// Write a regex that matches any of the strings cat, cot, cut, bat, bot, or but, regardless of case. Test it with this text:

// let str = 'My cats, Butterscotch and Pudding, like to sleep on my cot with me, but they cut my sleep short with acrobatics when breakfast time rolls around. I need a robotic cat feeder.'

// let regex = /[cCbB][aou][t]/g
// let regex = /[bc][aou][t]/gi

// let regex = /cat|cot|cut|bat|bot|but/gi;
// let regex = /[bc][aou]t/gi;

// console.log(str.match(regex));

// Base 20 digits include the decimal digits 0 through 9, and the letters A through J in upper or lowercase. Write a regex that matches base 20 digits. Test it with these strings. There should be 28 matches.

// let regex = /[a-j0-9]/gi;

// let str = '0xDEADBEEF'
// let str2 = '1234.5678'
// let str3 = 'Jamaica'
// let str4 = 'plow ahead'

// console.log(str.match(regex))
// console.log(str2.match(regex))
// console.log(str3.match(regex))
// console.log(str4.match(regex))

// Write a regex that matches any letter except x or X. Test it with these strings: There should be 82 matches.

// let str = '0x1234'
// let str2 = 'Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.'
// let str3 = 'The quick brown fox jumps over the lazy dog'
// let str4 = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'

// let regex = /[^xX' '0-9.]/gi;

// console.log(str.match(regex));
// console.log(str2.match(regex).length);
// console.log(str3.match(regex).length);
// console.log(str4.match(regex).length);

// Write a regex that matches any character that is not a letter. Test it with these strings:

// let str = '0x1234abcd'
// let str2 = '1,000,000,000s and 1,000,000,000s.'
// let str3 = 'THE quick BROWN fox JUMPS over THE lazy DOG!'

// let regex = /[^a-z]/gi;

// console.log(str.match(regex).length);
// console.log(str2.match(regex).length);
// console.log(str3.match(regex).length);

// Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

// let str = 'AbC';

// let regex1 = /(ABC|abc)/;
// let regex2 = /[Aa][Bb][Cc]/;

// console.log(str.match(regex1));
// console.log(str.match(regex2));

// Are /abc/i and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

// same regex, gets same results

// Challenge: write a regex that matches a string that looks like a simple negated character class range, e.g., '[^a-z]'. (Your answer should match precisely six characters.) Test it with these strings:

// let str = 'The regex /[^a-z]/i matches any character that is'
// let str2 = 'not a letter. Similarly, /[^0-9]/ matches any'
// let str3 = 'non-digit while /[^A-Z]/ matches any character'
// let str4 = 'that is not an uppercase letter. Beware: /[^+-<]/'
// let str5 = 'is at best obscure, and may even be wrong.'

// let regex = /[\/\[a-z0-9\]\/]/gi;

// console.log(str.match(regex));


// let str = 'back once again\n I\'m the renegade master';
// console.log(str);

// let str2 = str.match(/./gi).join('');
// console.log(str2);

// let str1 = 'Launch school'
// let str2 = 'July 4th, 1776'
// let str3 = '0xABCDef12'

// let regex = /\D/g;

// console.log(str3.match(regex));

// let str = 'Launch school'
// let str2 = 'July 4th, 1776'
// let str3 = 'one_word_two_words'
// let str4 = 'Don\'t fence me in.'

// let regex = /[\W]/g;

// console.log(str2.match(regex));

// Write a regex that matches any sequence of three characters delimited by whitespace characters. Test it with these strings:

// let str = 'reds and blues'
// let str2 = 'the lazy cat sleeps'

// let str = 'Doc in a big red box.'
// let str2 = 'Hup! 2 3 4'

// let regex = /\s...\s/gi;

// console.log(str.match(regex));

// Write a regex that matches any four digit hexadecimal number that is both preceded and followed by whitespace. Note that 0x1234 is not a hexadecimal number in this exercise: there is no space before the number 1234.


// let regex = /\s....a-f0-9\s/gi;

// let str = 'Hello 4567 bye CDEF - cdef';
// let str2 = '0x1234 0x5678 0xABCD';
// let str3 = '1F8A done';

// console.log(str.match(regex));

// let str = 'cat'
// let str2 = 'catastrophe'
// let str3 = 'wildcat'
// let str4 = 'I love my cat'
// let str5 = '<cat>'

// let regex = /^cat/gi;
// let regex2 = /[^cat]/gi;
// let regex3 = /cat$/gi;

// console.log(str2.match(regex3));
// console.log(str3.match(regex3));

// let str = 'One fish,'
// let str2 = 'Two fish,'
// let str3 = 'Red fish,'
// let str4 = 'Blue fish.'
// let str5 = '123 456 7890'

// let regex = /\b\w\w\w\w\b/gi

// console.log(str.match(regex));
// console.log(str2.match(regex));
// console.log(str3.match(regex));
// console.log(str4.match(regex));
// console.log(str5.match(regex));


