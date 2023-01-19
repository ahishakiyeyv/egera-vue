<template>
    <section>
        <div class="title">
            <h1 class="title1">Contact</h1>
        </div>
        <div class="container">
            <div class="sub-container1">
                <div class="content">
                        <h1 class="subtitle">We are here to help</h1>
                    <h3 class="subpara">Find the right solution</h3>
                </div>
                    <div class="content">
                        <h1 class="subtitle">General enquiries</h1>
                    <h3 class="subpara"><a href="mailto:contact@egeratech.com">contact@egeratech.com</a></h3>
                    </div>
                    <div class="content">
                        <h1 class="subtitle">Phone Number</h1>
                        <h3 class="num">+25769842175</h3>
                        <h3 class="num">+25779778929</h3>
                    </div>
                    <div class="content">
                          <h1 class="subtitle">Address</h1>
                    <h3 class="subpara">Avenue des Etats Unis, № 76, Kigobe Sud</h3>
                    </div>
            </div>
            <div class="sub-container2"></div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
.title1{
    text-align: center;
    font-size:2rem;
    color:#28A745;
}
.container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.sub-container{
    display:flex;
    flex-direction: column;
}
.content{
    margin:1rem;
}
.subtitle{
    font-size:1.8rem;
}
.subpara{
    font-size:1.4rem;
}
.subpara a{
    text-decoration: none;
    color:#000;
}
</style>
