let crypto = require('crypto')

for (let i = 0; i < 100; i++) {
  console.log(crypto.randomBytes(16).toString('hex'))
}

/* Output:
a1ef1f35467849367fbdcfa60adedffe
320d177ed7a346686c7572c3fa3a1cb4
20c594b485202198ee8a752d9f7560e1
d85f9cf48964140c65c0402260b68fb7
1cd3fe8d931461668d24038729b2c20d
3abb992d40b0b3ff13923bd776ae0bce
ab3cdbe378ad744d38e6eca637787d27
77c76277cbce4e82f02242e7c21995e0
8f0cf7d6b6c539f041ef43261816630f
7652802e36b9e014fb9b75611456a762
8edaa0320794e3dd39eadb104194057d
b7f3ec76be8304db6ab54ccedf06ca74
185a04de9ed3484b1b363975d827e398
27074192751b4b57db465020dbd3f1c6
34c481178221993f2c0b14a6e3f7a942
60a3e9cb1a168fb8e57473408e4c6c5f
7d0e131d410313b3a8b021aca2064868
e5ca3d54bccaaed96f949f9314d22879
4e404a889a315a407683b1fb124197ce
638577910ae2cd8d18e14c764c92cf14
d452262b2bf45dae41f2a571187440a2
79b43428c52bd85fe5db7a569a295613
388d7b8166f1d9957a48d5f0b6ecca94
e21aeeee4a4c64e6a813a0bf9938bed0
d243056569cd38bdc8701d08df80d7ae
ccf533054f356b404e14e9637c24af19
c1209681cac6800c0369889676295676
5c3d4a3d8816cd52bf3a085c9f021245
d4f3882e3fac6cca0b8a817245818fc7
72193f0f0ba7c796d65ef7a827648f04
5087991c105bcd66fad1fcd6dd09985c
76c7ee3d36169b0686e4be5b860ff9d3
e6c5060597ea0953d376a678bba356c5
6fedf2af8d8cd0a1ec2b00f3d3365457
e8d18e055276676bdd0bb4b0a79b0bfe
d1e2d772c0ec1436e9dbe4caae869cea
e97519af4c93b1d1b995b11b6351dddd
e915345419566f7a0ee2a4d313205166
fa5122cf56c0592e624e1ebcb86aff5c
b7c037c1dca931bc0cb9218576c939e4
3a937ca3a543b7a0ebb2ed4ed0bb8f70
995753b977bc8de64697100a348eadf7
2604e5c62ddf830a4846ecba1fd98527
258608f645fbaefd67e6449e69e3fd69
9ca279320299e2bb13183359c0e2e218
33c4ff9411bfeb0a23f2350f5f0a0b7b
e8c15112d976d0e0a72913d046795ae7
fdd733df4d81b7e35941cac1f1128f3a
70b076d258763375c446fcad0266e30e
39ec04c28ce663b38fd010b040a0defd
a2d84cf82d8f800ea3becdc514bdac24
0d68d4a516ce12fa21e99458daee4bc0
5245458743734e519e4a26e817648a3b
48db2ddeb36ad0a14c6c96ca223448f1
af20a4acecee1c8fa473247467934ddd
664f2c35aae17160db98e67d9c9383bd
acd98eb5402d165eae143599e4cbee11
57378ff4002cc1565ec010b45600a9a3
fa36813abc3da5057dc058b239fdd727
ee41e4f66d3fbbdc7d43713aa71949bd
044c4ec69c31ee19f7e2c4b13cd238bf
9cd4279d8a266dd2e3938697fc6bfbce
b0035835314e55d5856ba6bb8d190247
81038d3c67287fa9d907f9b4d1310c18
bbb93a05dc2fe0fbba48e79841c827b3
f1c1c1d4b29b4dc676f300d468079e25
e1b7d0fad29ffcf6b25043925cbfd1ad
0dfc5a1a6d87725b89c77f44f3a00c03
8cf2348f6e1a76a29a643cefe0f8b22f
334d99581a26f4296e4a4b171f94a8c9
24eb99ec82dd18185f9290a1787efc61
d8aff27e41edbd4f0169d3f9e06bfc4c
159235ba3ebd51fa64dfd25a563fc515
da1ee35ccbfe9733f73130843100afd9
1bd103c4e3f4ab32c9f7155f443076fd
fc0879a8020b6dfb4ce6b04b4abd97b0
63206620e84f1f86040851c336ca0a8a
652387c3b45c8a6c138a9c5fb235f2c0
c7aec22f87ca6fb9f51094b0d08f9cbc
7e898551721fb6151b965547b37e90eb
a0bd05909ff33e6d82023cae301a501e
956eb06ed8a10a5e266c6ef13ce4363a
67d4ff33de8d8bef2c064b3bb403311f
037ba010acafbd06994f2cb4faacdaff
0490a61e25d8715da43be21be6acff72
8ed44514d104d0bc997292476c5735d6
f55c2dff906f82634efc9573a7ecbaa8
ba6ac2a7f113e363ee5972965e83a44d
28ddfcab46de4999f3b1b02b5c160d2b
25744b71a9adc3a128df4756aced2939
6fb3dc055e53ca1071cca78760419b81
05527018824d75668625a3becbcb8fff
772f75242b348ef664b0c7a883530055
5fbac4ef1b7ea2bd519e224b3711d3a0
4393fd4362f4b39c4b496dbdd25caa8c
fc9dc9935bb8b24e3588fce7b1a2e0b5
3fe535fd5f85da90c45f6bdcb134abc5
75bdca85ddcc3bfa565885ca3fe042a3
1d621c55b27bb7260921e7b15b4359f1
bf0559b4bb0ab740d96d3ca5627895b1
*/

// const raw = require('./countries.json')
// const file = require('fs')

// const data = raw.countries.map((country) => {
//   return { _id: crypto.randomBytes(16).toString('hex'), ...country }
// })

// file.writeFile('countriesRaw.json', JSON.stringify(data), (err) => {
//   if (err) throw err
//   console.log('The file has been saved!')
// })

// console.log('data: ', data)

/**
 *
 * <p>The world of work is changing. Technology is everywhere, diversity is essential, and the line between personal and professional continues to blur. These changes present a once in a generation opportunity for business leaders, governments and society to reimagine how work gets done, reshape the workforce and empower people wherever they work.</p><p>Our passionate community of solvers is here to help you craft and execute a new strategy. Combining capabilities across markets and organisational specialties, guided by employment regulations and powered by the latest cloud-based data, analytics and reporting tools, we help turn today’s workplace challenges into new and better ways of working. With a fresh outlook and bold actions, you can build on individual strengths, fuel collective performance, and enable your people to deliver sustained outcomes for your business.</p><p>Human potential is boundless—and it’s already inside your organisation. We’ve got the breadth of strategic knowledge and implementation experience to help you unleash it.</p>
 *
 */
