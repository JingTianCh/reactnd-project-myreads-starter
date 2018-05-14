# MyReads Project_Udacity
# 阅读器项目
## MyReads: A Book Lending App
By:Jing Tian

## 简介
来源于Udacity项目。
够选择和归类你阅读过的图书、正在阅读的图书以及想要阅读的图书。
通过提供的一个 API服务器和客户端库，使使用者在与应用互动时能够保存信息。
参考的项目要求： https://review.udacity.com/#!/rubrics/1198/view

## 应用功能
> *  在此应用中，主页面显示了一个“书架”列表（即类别），每个书架都包含一个图书数量。三个书架分别为：
> 当前阅读
> 想要阅读
> 已经阅读
> * 每本图书都有一个控件，使你能够为该图书选择书架。当你选择其他书架时，图书就移到该书架上。注意，控件的默认值应该始终为图书当前所在书架。
> *  主页面还有一个“搜索”链接，该链接是一个搜索页面，使你能够查找图书并将其添加到书库中。
> *  搜索页面具有一个文本输入框，可以用来查找图书。当文本输入的值更改后，与该查询匹配的图书将显示在页面上，以及使你将该图书添加到书库中的控件。
> * 搜索页面具有一个指向 /（根 URL）的链接，并返回主页面。
> 当你从搜索页面返回主页面时，应该立即看到在书库的搜索页面所做的所有选择。

## 可用性
> * 响应式窗口，可在不同尺寸的浏览器上显示

## 参考资料来源：
> *  样式要求：https://udacity.github.io/git-styleguide/
> *  参考例程reactnd-contacts-complete：https://github.com/udacity/reactnd-contacts-complete/blob/master/src/App.js