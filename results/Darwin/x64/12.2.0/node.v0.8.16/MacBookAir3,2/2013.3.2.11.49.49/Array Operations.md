> #### Details

>> **Benchmark** ```Array Operations```

>> **Date** ```Sat Mar 02 2013 11:49:49 GMT-0800 (PST)```

>> **Node Version** ```v0.8.16```

>> **Operating System** ```Darwin x64 12.2.0```

>> **CPU** ```MacBookAir3,2 (2 cores)```

>> **Memory** ```4 GB (total), 152.207 MB (free)```



---

> #### Category: primitive array 10s

>> **push** ``` iterations: 100, avg: 0.006ms, longest: 0.059ms, shortest: 0.003ms```

>> **push in for loop** ``` iterations: 100, avg: 0.011ms, longest: 0.467ms, shortest: 0.003ms```

>> **(+) push in forEach** ``` iterations: 100, avg: 0.074ms, longest: 3.488ms, shortest: 0.005ms```

>> **splice** ``` iterations: 100, avg: 0.006ms, longest: 0.194ms, shortest: 0.003ms```

>> **(-) splice prototype** ``` iterations: 100, avg: 0.005ms, longest: 0.029ms, shortest: 0.004ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.01ms, longest: 0.348ms, shortest: 0.003ms```

>> **for var in expand** ``` iterations: 100, avg: 0.011ms, longest: 0.123ms, shortest: 0.006ms```



---

> #### Category: primitive array 100s

>> **push** ``` iterations: 100, avg: 0.008ms, longest: 0.323ms, shortest: 0.004ms```

>> **(-) push in for loop** ``` iterations: 100, avg: 0.007ms, longest: 0.198ms, shortest: 0.004ms```

>> **(+) push in forEach** ``` iterations: 100, avg: 0.048ms, longest: 1.061ms, shortest: 0.013ms```

>> **splice** ``` iterations: 100, avg: 0.008ms, longest: 0.322ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.014ms, longest: 0.881ms, shortest: 0.003ms```

>> **(-) for (i < length)** ``` iterations: 100, avg: 0.007ms, longest: 0.019ms, shortest: 0.006ms```

>> **for var in expand** ``` iterations: 100, avg: 0.029ms, longest: 0.227ms, shortest: 0.023ms```



---

> #### Category: primitive array 1000s

>> **push** ``` iterations: 100, avg: 0.018ms, longest: 0.185ms, shortest: 0.014ms```

>> **push in for loop** ``` iterations: 100, avg: 0.021ms, longest: 0.301ms, shortest: 0.015ms```

>> **push in forEach** ``` iterations: 100, avg: 0.205ms, longest: 3.520ms, shortest: 0.106ms```

>> **(-) splice** ``` iterations: 100, avg: 0.006ms, longest: 0.199ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.009ms, longest: 0.521ms, shortest: 0.003ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.046ms, longest: 0.715ms, shortest: 0.027ms```

>> **(+) for var in expand** ``` iterations: 100, avg: 0.294ms, longest: 3.400ms, shortest: 0.174ms```



---

> #### Category: object array 10s

>> **push** ``` iterations: 100, avg: 0.014ms, longest: 0.413ms, shortest: 0.003ms```

>> **(-) push in for loop** ``` iterations: 100, avg: 0.004ms, longest: 0.030ms, shortest: 0.003ms```

>> **push in forEach** ``` iterations: 100, avg: 0.008ms, longest: 0.053ms, shortest: 0.004ms```

>> **(+) splice** ``` iterations: 100, avg: 0.031ms, longest: 1.204ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.009ms, longest: 0.241ms, shortest: 0.004ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.015ms, longest: 0.578ms, shortest: 0.004ms```

>> **for var in expand** ``` iterations: 100, avg: 0.014ms, longest: 0.203ms, shortest: 0.007ms```



---

> #### Category: object array 100s

>> **push** ``` iterations: 100, avg: 0.005ms, longest: 0.019ms, shortest: 0.004ms```

>> **push in for loop** ``` iterations: 100, avg: 0.009ms, longest: 0.159ms, shortest: 0.004ms```

>> **(+) push in forEach** ``` iterations: 100, avg: 0.381ms, longest: 21.131ms, shortest: 0.013ms```

>> **(-) splice** ``` iterations: 100, avg: 0.004ms, longest: 0.010ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.006ms, longest: 0.183ms, shortest: 0.004ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.008ms, longest: 0.075ms, shortest: 0.007ms```

>> **for var in expand** ``` iterations: 100, avg: 0.026ms, longest: 0.043ms, shortest: 0.021ms```



---

> #### Category: object array 1000s

>> **push** ``` iterations: 100, avg: 0.02ms, longest: 0.202ms, shortest: 0.015ms```

>> **push in for loop** ``` iterations: 100, avg: 0.053ms, longest: 3.230ms, shortest: 0.017ms```

>> **push in forEach** ``` iterations: 100, avg: 0.144ms, longest: 1.481ms, shortest: 0.108ms```

>> **(-) splice** ``` iterations: 100, avg: 0.004ms, longest: 0.010ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.007ms, longest: 0.213ms, shortest: 0.004ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.08ms, longest: 1.364ms, shortest: 0.028ms```

>> **(+) for var in expand** ``` iterations: 100, avg: 0.392ms, longest: 5.821ms, shortest: 0.179ms```



---

> #### Category: mixed array 10s

>> **push** ``` iterations: 100, avg: 0.004ms, longest: 0.009ms, shortest: 0.003ms```

>> **(-) push in for loop** ``` iterations: 100, avg: 0.003ms, longest: 0.010ms, shortest: 0.003ms```

>> **push in forEach** ``` iterations: 100, avg: 0.006ms, longest: 0.040ms, shortest: 0.004ms```

>> **splice** ``` iterations: 100, avg: 0.004ms, longest: 0.012ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.004ms, longest: 0.010ms, shortest: 0.003ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.004ms, longest: 0.008ms, shortest: 0.004ms```

>> **(+) for var in expand** ``` iterations: 100, avg: 0.009ms, longest: 0.022ms, shortest: 0.007ms```



---

> #### Category: mixed array 100s

>> **push** ``` iterations: 100, avg: 0.005ms, longest: 0.018ms, shortest: 0.004ms```

>> **push in for loop** ``` iterations: 100, avg: 0.005ms, longest: 0.008ms, shortest: 0.004ms```

>> **push in forEach** ``` iterations: 100, avg: 0.02ms, longest: 0.263ms, shortest: 0.013ms```

>> **(-) splice** ``` iterations: 100, avg: 0.003ms, longest: 0.007ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.004ms, longest: 0.012ms, shortest: 0.003ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.008ms, longest: 0.010ms, shortest: 0.007ms```

>> **(+) for var in expand** ``` iterations: 100, avg: 0.037ms, longest: 0.407ms, shortest: 0.026ms```



---

> #### Category: mixed array 1000s

>> **push** ``` iterations: 100, avg: 0.028ms, longest: 1.031ms, shortest: 0.015ms```

>> **push in for loop** ``` iterations: 100, avg: 0.053ms, longest: 2.501ms, shortest: 0.020ms```

>> **push in forEach** ``` iterations: 100, avg: 0.139ms, longest: 0.389ms, shortest: 0.113ms```

>> **(-) splice** ``` iterations: 100, avg: 0.003ms, longest: 0.013ms, shortest: 0.003ms```

>> **splice prototype** ``` iterations: 100, avg: 0.006ms, longest: 0.165ms, shortest: 0.004ms```

>> **for (i < length)** ``` iterations: 100, avg: 0.04ms, longest: 0.426ms, shortest: 0.033ms```

>> **(+) for var in expand** ``` iterations: 100, avg: 0.337ms, longest: 3.544ms, shortest: 0.212ms```



---

