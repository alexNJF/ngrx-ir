# مقایسه Component Store با Store 
هر دوی این لایبرری ها برای حل مشکلات مختلفی در مدیریت استیت در انگولار بوجود اومدن .
<br/> 
این دوتا کتابخونه از همدیگه مستقل هستن و استفاده از اونا به فاکتور های زیادی بستگی داره .
<br/>از بین همه فاکتور هایی که باید در نظر بگیریم تا بتونیم انتخاب کنیم که از کدوم یکی از این لایبرری ها استفاده کنیم موارد زیر مهم تر هستن .

- **سایز اپلیکیشن**
منظور اینه که اپلیکیشن چند تا کامپوننت داره 

- **ارتباطات داخلی اپلیکیشن**
این که تمام کامپوننت ها به همدیگه گره خوردن یا به صورت گروهی به هم ارتباط دارن 

- **عمق کامپوننت ها**
هر کامپوننتی چقدر کامپوننت تو دل خودش داره 

- **مالکیت استیت**
باید بررسی کنیم که دامین ها به خوبی از هم جدا شده اند

- **طول عمر استیت**
باید بررسی کنیم که استیت تو کل اپلیکشن باید در دسترس باشه یا این که اگه به یه قسمت دیگه اپلیکیشن رفتیم از بین میره 

- **تغییرات بیزینس**
این که چقدر از کار روشن هست خیلی به انتخاب این که چه استراتژی رو برای پیشبرد کار انتخاب میکنیم کمک میکنه

- **طول عمر اپلیکیشن**
چک کنیم که این محصول یه پروداکت واقعی هست یا یه محصول 
mvp

## مزایا و معایب 
ComponentStore و Global Store مزایای زیادی دارند که برخی از آنها در مقدمه ذکر شده است. آنها به سازماندهی حالت کمک می کنند، مهاجرت به API های جدید را آسان تر می کنند، تغییرات و عوارض جانبی را در خود محصور می کنند، اجزای ما را کوچکتر، آسان تر برای آزمایش و عملکرد بیشتر می کنند، اما همچنین پیچیدگی کد را با غیر جهت ها معرفی می کنند.

**مهمه که استیت منیجمنت ها رو درک کنیم و بدونیم معایبش چیه و چرا باید به پروژه اضافه بشه**


Both of them bring [push-based architecture](https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d), which is the first indirection. The developer can no longer 
get the result of a service method call, instead they would be listening for Observable values
exposed by that service. The benefit, on the other side, is that the developer no longer has to worry what
is changing the state - all the component needs to know is that something has changed it. If the
component wants to change the state itself, it sends the message about it (either dispatches an 
Action in Store, or calls ComponentStore's `updater` or `effect`).

Actions are the second indirection. They are present in the Global Store only. There are many benefits 
of this indirection, such as:
* ability to trigger multiple effects/reducers at the same time
* greater scalability
* useful DevTools

ComponentStore doesn't have that indirection, however it also loses the above-mentioned benefits.

The scale of state that it works with has to be smaller, which brings another set of benefits, such as:
* ComponentStore that is tied to the specific node in the components tree, will be automatically cleaned up when that node is destroyed
* state is fully self-contained with each ComponentStore, and thus allows to have multiple 
independent instances of the same component
* provides simpler state management to small/medium sized apps

<div class="alert is-helpful">

The difference between the benefits and trade-offs of Stores make Global Store better suited for
managing global shared state, where ComponentStore shines managing more local, encapsulated state,
as well as component UI state.

</div>

Depending on the needs of the application, the developer might choose Store or ComponentStore, or,
in cases of the larger apps, both Store **and** ComponentStore.

## State ownership

The Global Store works with the **single** immutable object, that contains all of the shared state throughout
the application. There are multiple reducers, each one responsible for a particular **slice** of
state.

Each ComponentStore is fully responsible for its own state. There could be **many** different
ComponentStores, but each one should store its own distinct state.

<figure>
  <img src="https://ngrx.io/generated/images/guide/component-store/state-structure.png" alt="Comparison of NgRx Store and Component Store state ownership or placement" width="100%" height="100%" />
</figure>
