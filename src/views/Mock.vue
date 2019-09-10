<template>
    <div class="mock">
        <div class="tt">
            <div class="text" @click="$router.push('/vacation')">
                休假
            </div>
            <div class="text"  @click="$router.push('/apply')">
                加班
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .mock{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5)
    }
    .tt{
        width: 100%;
        height: 150px;
        background-color: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /* left: 0; */
    }
    .text{
        width: 50%;
        text-align: center;
    }
</style>