/**
 * Logical (&&, ||, !)
 * 
 * && -> and-operator
 *      All combined conditions must be true, to get final result as true
 *      if any one of the combined conditions are false, final result is false
 * || -> or-operator
 *      Any one of combined conditions has to be true to get final result as true
 *      if all combined conditions are false, final result is false
 * 
 * ! -> not-operator
 *      makes true into false and vice-versa
 * 
 */

/**
 *  lVar1 is greater than lVar3 and lVar2 not equals to lVar4
 * 
 *  lVar1 > lVar3 && lVar2 !== lVar4
 *  
 *  false && true
 * 
 *  false
 * 
 * 
 * age = 20
 * state = NY
 * ever gone to school - no
 * 
 * if age is above 21 and live in NY -> colg discount is 10
 * 
 * 
 * if age is above 21 or live in NY or must be school pastout -> colg discount is 10
 * 
 */
 let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

 let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4);     // false
         /*
             10 <= 30 && (20 === 30+40)
             true && (20 === 70)
             true && false
             false
         */
 console.log(`lRes1 -> ${lRes1}`);
 
 lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4); 
         /*
             10 <= 30 && !(20 === 30+40)
             true && !(20 === 70)
             true && !(false)
             true && true
             true
         */
 console.log(`lRes1 -> ${lRes1}`);