// for a grid of size n, how many routes are added with a new layer?

/**
 * 
 * Adding a layer above and to the left:
 * 
 *     ooo          xxxx
 *     ooo    -->   xooo 
 *     ooo          xooo
 *                  xooo
 * 
 *    1 + 2 + 4 + 2 + 1 = 10 (for third layer added)
 * 
 *    1 + 2 + 3 + 6 + 3 + 2 + 1 = 18 (for the fourth layer)
 * 
 * 
 * With each new layer that is added, 2n + 1 squares are added.
 * 
 * The corner square can go to every other square that's added.
 * 
 * Every other square can go to the square along its edge to the
 * right/down of it; not both, so, for each edge:
 * 
 * 1 + 2 + 3 ... + (n - 1)
 * 
 * This is the triangular number (n-1)
 * 
 * This is calculated as (x^2 + x) / 2
 * 
 * (n-1)(n-1) = n^2 - 2n + 1
 * 
 * So then each edge adds:
 * 
 * (n^2 - n) / 2
 * 
 * As we have two edges, these therefore add:
 * 
 * (n^2 - n) routes
 * 
 * The corner piece adds 2n - 2 routes
 * 
 * So, the total number of routes added per layer is:
 * 
 * n^2 + n - 2
 * 
 * Not typically that simple though; as it depends on the square that it is connected to
 * 
 * You need to know the number of routes out of the block that you're connecting to
 * 
 */

