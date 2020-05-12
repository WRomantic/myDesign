import {
  IMGCLASSIFYurl,
  ANIMALurl,
  PLANTurl,
  REDWINEurl,
  GENERALurl,
  ACCURATE_BASEurl,
  ACCURATEurl,
  CARDurl,
  CAR_url,
  FOODurl
} from './const.js'
 

export const SORT_INDEXDATAS = {
  pic: [{
    title: "动物识别",
    indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/%E7%8C%AB.jpg?sign=d6c5571862d62fb949b87e675ef3cb1c&t=1582705993",
    footTxt: "识别近八千种动物，接口返回动物名称，并获取百科信息，适用于拍照识图类APP中",
    url: ANIMALurl,
    type: "animal"
  }, {
    title: "植物识别",
    indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/3.jpg?sign=0ea88406eabf6277d21de1255882a007&t=1582699432",
    footTxt: "支持识别超过2万种通用植物和近8千种花卉，接口返回植物的名称，并获取百科信息，适用于拍照识图类APP中",
    url: PLANTurl,
    type: "plant"
  }, {
    title: "红酒识别",
    indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/ORCYUN/sortPic/%E7%BA%A2%E9%85%922.jpg?sign=cb4ef534ec0b17de87b9820ad74e21ae&t=1583383507",
    footTxt: "",
    url: REDWINEurl,
    type: "redwine"
  }, {
    title: "菜品识别",
    indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/ORCYUN/sortPic/%E8%8F%9C%E5%93%813.jpg?sign=ee72a2a31ebb352b165e73fa5b5774a9&t=1583383792",
    footTxt: "",
    url: FOODurl,
    type: "food"
  }, {
    title: "场景识别",
    indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/3.jpg?sign=0ea88406eabf6277d21de1255882a007&t=1582699432",
    footTxt: "",
    url: IMGCLASSIFYurl,
    type: "scene"
    }, {
      title: "汽车识别",
      indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/3.jpg?sign=0ea88406eabf6277d21de1255882a007&t=1582699432",
      footTxt: "",
      url: CAR_url,
      type: "car"
    }],
  text: [{
      title: "通用文字识别",
      indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/%E6%96%87%E5%AD%97.jpg?sign=a6215b7066674cf2c76c067cfa36f63e&t=1582706137",
      footTxt: "基于业界领先的深度学习技术，提供多场景、多语种、高精度的整图文字检测和识别服务，多项ICDAR指标居世界第一",
      url: GENERALurl,
      type: "font"
    },
    {
      title: "精度版",
      indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/%E6%96%87%E5%AD%97.jpg?sign=a6215b7066674cf2c76c067cfa36f63e&t=1582706137",
      footTxt: "",
      url: ACCURATE_BASEurl,
      type: "accurate_base"
    }
  ]
}

//sort图标
export const SORT_Arr = {
    text: [{
        title: "通用文字识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%99%AE%E9%80%9A%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB.png?sign=3ccb08024bf25bf08b28f9e0caa556ed&t=1583203910"
      },
      {
        title: "高精度",
        icon: "cloud://w-1314.772d-w-1314-1257815135/photo/icon/初级文字.png"
      }
    ],
    photo: [{
        title: "动物识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/Animals%20and%20Birds%20%E5%8A%A8%E7%89%A9%E5%92%8C%E9%B8%9F.png?sign=4c63ee5c0f0e4482f300ea8e470f8666&t=1583211119"
      },
      {
        title: "植物识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%A4%8D%E7%89%A9.png?sign=d5f2f232e4974611dacbc85db42bd80f&t=1583211193"
      },
      {
        title: "红酒识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/Jaye%E7%9A%84%E7%BA%A2%E9%85%92%E6%9D%AF(%E5%BD%A9%E8%89%B2).png?sign=dade99e1bc008290bc65dd77219229a7&t=1583211328"
      },
      {
        title: "菜品识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E8%8F%9C%E5%93%81%E5%88%86%E6%9E%90.png?sign=cd9f6e9030bf648579522e4ea4ffb87b&t=1583211861"
      },
      {
        title: "通用物体和场景识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E5%A4%9A%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF.png?sign=e973bce5f128792d448a884d02c35094&t=1583211874"
      },
      {
        title: "车辆识别",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%B1%BD%E8%BD%A6.png?sign=01a10cf3547038b102dc4a68647412d2&t=1583909583"
      }
    ],
    other: [{
      title: "期待更多",
      icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%9B%B4%E5%A4%9A.png?sign=9b6825b75b2bdfad69c7a16d2943124f&t=1583211507"
    }]
  }