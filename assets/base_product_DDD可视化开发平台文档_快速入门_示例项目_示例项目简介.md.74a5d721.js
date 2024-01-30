import{_ as t,o as e,c as a,S as r}from"./chunks/framework.a3dd33a8.js";const f=JSON.parse('{"title":"示例项目简介","description":"","frontmatter":{},"headers":[],"relativePath":"base/product/DDD可视化开发平台文档/快速入门/示例项目/示例项目简介.md","filePath":"base/product/DDD可视化开发平台文档/快速入门/示例项目/示例项目简介.md","lastUpdated":1706585121000}'),l={name:"base/product/DDD可视化开发平台文档/快速入门/示例项目/示例项目简介.md"},n=r('<h1 id="示例项目简介" tabindex="-1">示例项目简介 <a class="header-anchor" href="#示例项目简介" aria-label="Permalink to &quot;示例项目简介&quot;">​</a></h1><p>本文介绍使用示例项目的前提条件，以及示例项目的背景信息、使用限制和其全流程操作步骤简介。</p><h2 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h2><p>已开通DDD可视化平台 公有云版本服务。</p><h2 id="背景信息" tabindex="-1">背景信息 <a class="header-anchor" href="#背景信息" aria-label="Permalink to &quot;背景信息&quot;">​</a></h2><p>在DDD 启蒙阶段， 很多人最开始的熟悉阶段为 欧创新 在极客时间中的课程 <a href="https://houbb.github.io/2015/01/01/DDD%E5%AE%9E%E6%88%98%E8%AF%BE-18%E7%9F%A5%E8%AF%86%E7%82%B9%E4%B8%B2%E8%AE%B2-%E5%9F%BA%E4%BA%8EDDD%E7%9A%84%E5%BE%AE%E6%9C%8D%E5%8A%A1%E8%AE%BE%E8%AE%A1%E5%AE%9E%E4%BE%8B" target="_blank" rel="noreferrer">DDD实战</a> 为案例，若对这个课程感兴趣可以按<a href="https://time.geekbang.org/column/intro/100037301?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search&amp;tab=intro" target="_blank" rel="noreferrer">此链接查看</a> 在案例中主要讲了一个案例，为请假系统：</p><p>项目的目标是实现在线请假和考勤管理。</p><p>功能描述如下：</p><ul><li>请假人填写请假单提交审批，根据请假人身份、请假类型和请假天数进行校验，根据审批规则逐级递交上级审批，逐级核批通过则完成审批，否则审批不通过退回申请人。</li><li>根据考勤规则，核销请假数据后，对考勤数据进行校验，输出考勤统计。</li></ul><h2 id="示例项目全流程操作步骤简介" tabindex="-1">示例项目全流程操作步骤简介 <a class="header-anchor" href="#示例项目全流程操作步骤简介" aria-label="Permalink to &quot;示例项目全流程操作步骤简介&quot;">​</a></h2><p>通过以下六个操作步骤，您可以了解DDD可视化平台的主线流程。</p><table><thead><tr><th style="text-align:left;"><strong>步骤</strong></th><th style="text-align:left;"><strong>说明</strong></th><th><strong>相关文档</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>一、业务场景分析</strong></td><td style="text-align:left;">您将产品/业务人员，理解和定义业务问题。目标是识别关键的业务需求和约束，以及确定软件解决方案应如何帮助业务达成其目标，为达成这个目标，需要的操作流程，以及各角色之间的协同关系</td><td><a href="./步骤一：业务场景分析.html">步骤一：业务场景分析</a></td></tr><tr><td style="text-align:left;"><strong>二、场景过程分析</strong></td><td style="text-align:left;">作为产品和架构师深入入分析特定的业务场景和流程，以便更好地了解业务操作的具体细节。通过这种方式，可以识别出关键业务流程，以便于拆分关键的业务模块</td><td><a href="./步骤二：场景过程分析.html">步骤二：场景过程分析</a></td></tr><tr><td style="text-align:left;"><strong>三、领域建模</strong></td><td style="text-align:left;">系统架构师创建反映业务领域的概念模型，与领域专家合作以确保模型准确反映业务实体和关系</td><td><a href="./步骤三：领域建模.html">步骤三：领域建模</a></td></tr><tr><td style="text-align:left;"><strong>四、文档==代码</strong></td><td style="text-align:left;">您作为开发人员软件开发人员编写代码的同时更新文档，确保文档的准确性和可读性，基于文档生成代码之后，确保文档与代码保持一致</td><td><a href="./步骤五：模型即代码.html">步骤四：文档==代码</a></td></tr><tr><td style="text-align:left;"><strong>五、设计评审与校验</strong></td><td style="text-align:left;">团队成员参与评审领域模型和设计方案，确保它们满足业务需求并具有实现可能性</td><td><a href="./步骤四：设计评审与校验.html">步骤五：设计评审与校验</a></td></tr><tr><td style="text-align:left;"><strong>六、AI辅助编码</strong></td><td style="text-align:left;">作为开发人员你将使用AI,预生成的方式来辅助编码，以提高编码的效率和编码的质量，包括：单元测试， 代码优化，代码生成，代码修复， 代码审核。</td><td><a href="./步骤六：AI辅助编码.html">步骤六：AI辅助编码</a></td></tr></tbody></table>',12),s=[n];function d(o,i,h,g,_,m){return e(),a("div",null,s)}const p=t(l,[["render",d]]);export{f as __pageData,p as default};
