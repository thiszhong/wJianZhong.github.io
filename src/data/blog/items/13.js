import React, { Component } from 'react'
// import '../../../styles/base.css'

export default class Content extends Component {

  render () {
    return (
      <div>
        <p>APP项目中用到分享功能是很常见的，比如我本次项目中可能还要用到推送、统计相关，所以目前选择了友盟SDK，本文主要是针对安卓。</p>
        <p>首先放官方</p>
        <ul>
          <li>集成文档：<a href="https://developer.umeng.com/docs/66632/detail/67587#h1-u5DE5u7A0Bu914Du7F6E1">https://developer.umeng.com/docs/66632/detail/67587#h1-u5DE5u7A0Bu914Du7F6E1 </a></li>
          <li>DEMO：<a href="https://github.com/umeng/React_Native_Compent">https://github.com/umeng/React_Native_Compent</a></li>
        </ul>
        <p>
        跟着集成文档操作，目录不明白的可以参考DEMO。用 <a href="https://developer.umeng.com/sdk/reactnative">https://developer.umeng.com/sdk/reactnative</a> 的桥接文件（.java）（其中的js里的ShareUtil.js可以放到我们自己的组件components文件夹里，最后调用的时候会用到，用法就相当于封装好的一个组件），用<a href="https://developer.umeng.com/sdk/android">https://developer.umeng.com/sdk/android</a>的最新jar，根据需要集成下载并放到对应的目录。
        </p>
        <img src={require('../../../img/13-1.png')} alt="" />
        <p>只是分享的话，目录大概是：（注意res文件夹里的文件也要复制过来，不然可能会闪退——缺少资源文件） </p>
        <img src={require('../../../img/13-2.png')} alt="" /><br />
        <img src={require('../../../img/13-3.png')} alt="" />
        <p>
        接下来要将上面一幅图中新引进来的几个桥接文件（.java）中引用包名的地方， com.umeng.soexample.invokenative 改成 （包名）.invokenative，这时候应该就能看懂这个是怎么用的了吧，要灵活点哦，比如 WXEntryActivity.java 里应该是 （包名）.wxapi，根据我的目录结构，相对的之前的 MainActivity.java 就直接是 （包名）。还有我们暂时不用的东西要先注释掉，比如 DplusReactPackage.java 里面的
        </p>

        <p style={{color: '#666', margin: 0}}>// 因为这些的桥接文件.java和.jar目前没有放进项目，直接用了会报错</p>
        <p style={{color: '#666', margin: 0}}>// modules.add(new PushModule(reactContext)); // 推送相关</p>
        <p style={{color: '#666', margin: 0}}>// modules.add(new AnalyticsModule(reactContext)); // 统计</p>
      
        <p>
        接着文档，在 MainActivity.java 、MainActivity.java里面加代码，这个时候就应该结合DEMO里的相应文件来改了，因为添加方法之前肯定是需要引入（import）的，但文档中没有提。但也不是把DEMO里头部的 import 都引进来，因为DEMO里是把推送和统计功能都做了，所以我们根据文档里添加的方法和字段选择性的复制过来（import中若有com.umeng.soexample，需换成包名。不在目录内的不用换，如import com.umeng.socialize.PlatformConfig;），如果没有引，运行的时候会报错到相应方法。
        </p>
        <p>
        到这里我们应该能调通微信分享了（打包后apk，未打包的会一闪而过，因为微信分享需要验证包名+appid+appsecret），要想调通QQ等，需要跟着文档Share-Android最后有个 “分享其它工程配置请参照分享工程配置”的入口，我们主要根据这个工程配置 <a href="http://dev.umeng.com/sdk_integate/android_sdk/android_share_doc#1_5">http://dev.umeng.com/sdk_integate/android_sdk/android_share_doc#1_5</a> 在 android/app/src/main/AndroidManifest.xml 里加一些东西：sdk中需要的Activity：新浪、QQ等，其中QQ请使用完整版（即使SDK引的是精简版，测试精简版Activity会报错），当然这些也可以直接从DEMO里对应的文件读取。
        </p>
        <p>
        至此，重新编译运行一下应该就能调用分享组件了，若报错不能deleted…什么的，手动删除 android / app / build 下的所有文件即可。
        </p>
      </div>
    )
  }
  
}