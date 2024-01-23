<template>
    <div class="container">
    <form ref="loginForm">
        <ion-card>
            <div class="card-title"><h2>Login Page</h2></div>
            <div class="card-content">
                <ion-input class="credentials" v-model="credentials.username" fill="outline" placeholder="Username" type="text"></ion-input>
                <ion-input class="credentials" v-model="credentials.password" fill="outline" placeholder="Passowrd" type="password"></ion-input>
            </div>
            <div class="card-button">
                <ion-button @click="login()" class="login-button">Login</ion-button>
            </div>
        </ion-card>
    </form>
</div>
</template>
<script setup lang="ts">
import { IonCard,  IonCardTitle, IonCardContent, IonInput, IonButton } from '@ionic/vue';
import {ref} from 'vue'

const credentials= ref({
    username:'',
    password:''
})

function login(){
    console.log(credentials.value.username)
    console.log(credentials.value.password)
}

</script>
<style scoped>
*{
    margin:0px;
    padding:0px;
}

.container{
    box-sizing: border-box;
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
}

ion-card{
    width:350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .card-title{
        /* padding: 20px; */
        margin:20px 0;
    }

    .card-content{
        margin: 20px 0;
        .credentials{
            margin:10px;
        }
    }

    .card-button{
        /* position:absolute; */
        /* top:10; */
        margin:20px 0;
    }
    

    /* & ion-card-content{
        margin:0;
        width: 80%;
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        .credentials{
            margin-top: 15px;
        }

        .login-button{
            position: absolute;
            bottom:24px;
        }
    } */
    
}

/* ion-card-title{
    margin-top:10px;
} */
</style>