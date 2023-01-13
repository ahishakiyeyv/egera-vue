<template>
    <section>
        <h1 class="title">Know egeraTech</h1>
        <div class="container-know">
            <div class="sub-content about">
                <h1 class="sub-title">about-us</h1>
                <p class="desc">egeraTech -a Professional Web Design and Development company</p>
            </div>
            <div class="sub-content vision">
                <h1 class="sub-title">vision</h1>
                <p class="desc">To see the easy life for everyone</p>
            </div>
            <div class="sub-content mission">
                <h1 class="sub-title">mission</h1>
                <p class="desc">Digitalized and redigitalized information system.</p>
            </div>
            <div class="sub-content culture">
                <h1 class="sub-title">culture</h1>
                <p class="desc">Start early, use what you have for better and celebrate for every success.</p>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
section{
    margin-top:5rem;
}
.title{
    margin-left:500px;
    font-size:1.8rem;
    color:#fff;
    background:#6D98F8;
    padding:.6rem 1.2rem;
    width:15rem;
    text-align: center;
}

.container-know{
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    width: 100%;
    height: 60vh;
    overflow: auto;
    flex-direction: row;
    
}
.container-know .sub-content{
    width: 200px;
    height: 180px;
    margin:3rem;
    border:1px solid #6D98F8;
}
.sub-title{
    text-transform: uppercase;
    color:#6D98F8;
    letter-spacing: 1px;
    text-align: center;
    font-weight:600;
    padding:.5rem;
}
.desc{
    text-align: center;
    margin-top:.5rem;
    padding:.5rem;
}
.sub-content.about{
    transform: rotate(-3deg);
}
.sub-content.vision{
    transform:rotate(3deg);
}
.sub-content.mission{
    transform:rotate(-3deg);
}
.sub-content.culture{
    transform:rotate(3deg);
}
</style>
