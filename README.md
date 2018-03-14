NAACL 2018 submission
=========================

_Authors: Jekaterina Novikova, Ondrej Dusek and Verena Rieser_

This repository contains the dataset and code released with the submission of NAACL 2018 paper "RankME: Reliable Human Ratings for Natural Language Generation".

Contents
-------

### crowdflower: ###
This folder contains instructions, CML, CSS and JS code used in CrowdFlower tasks.

### data: ###
This folder contains datasets used to collect evaluation data.

### analysis: ###
This folder contains statistical analysis code.

Description
-------

Setup 1 corresponds to the experimental setup when the human evaluation ratings of *informativeness*, *naturalness* and *quality* are collected together. The folder **crowdflower/setup_1**, in correspondence with the paper, contains three code versions of Setup 1 - Likert, PlainME and RankME. Screenshots of the corresponding CrowdFlower tasks are shown in Fig.1:

<a href="lik_stp1.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/lik_stp1.png" align="left" width="31%" ></a>
<a href="plainME_stp1.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/plainME_stp1.png" align="left" width="31%" ></a>
<a href="rankME_stp1.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/rankME_stp1.png" align="left" width="31%" ></a>

<br>Fig.1. Screenshots of three methods used with Setup 1 to collect human evaluation data. Left to right - Likert, PlainME and RankME methods

Setup 2 corresponds to the experimental setup when the human evaluation ratings of *informativeness*, *naturalness* and *quality* are collected separately. The folder **crowdflower/setup_2** provides CrowdFlower code for three collection methods (Likert, PlainME and RankME) for each human rating (informativeness*, *naturalness* and *quality*). Screenshots of the RankME method for Setup 2 for *informativeness*, *naturalness* and *quality* are shown in Fig.2:

<a href="rankME_stp2_inf.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/rankME_stp2_inf.png" align="left" width="31%" ></a>
<a href="rankME_stp2_natur.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/rankME_stp2_natur.png" align="left" width="31%" ></a>
<a href="rankME_stp2_qual.png"><img src="https://github.com/jeknov/NAACL_18_submission_RankME/blob/master/rankME_stp2_qual.png" align="left" width="31%" ></a>

<br>Fig.2. Screenshots of the RankME methods/setup 2 used to collect human evaluation data. Left to right - informativeness, naturalness, quality.

Citing
-------

If you use this dataset in your work, please cite the following paper:

```
@inproceedings{novikova2018rankME,
  title={Rank{ME}: Reliable Human Ratings for Natural Language Generation},
  author={Novikova, Jekaterina and Du{\v{s}}ek, Ondrej and Rieser, Verena},
  booktitle={Proceedings of the  16th Annual Conference of the North American Chapter 
             of the Association for Computational Linguistics},
  address={New Orleans, Louisiana},
  year={2018}
}
```

License
-------

Distributed under the [Creative Commons 4.0 Attribution-ShareAlike license
(CC4.0-BY-SA)](https://creativecommons.org/licenses/by-sa/4.0/).


Acknowledgements
----------------

This research received funding from the EPSRC projects DILiGENt (EP/M005429/1) and MaDrIgAL (EP/N017536/1).
