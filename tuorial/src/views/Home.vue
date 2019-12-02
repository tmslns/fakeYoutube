<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<template>
    <v-container class="pa-4 text-center">
            <v-row class="fill-height" align="center" justify="left">
                <template v-for="(item, i) in filteredItems">
                    <v-col :key="i" cols="12" md="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                <v-img :src="item.img" height="220px">
                                    <v-card-title class="title white--text">
                                        <v-row class="fill-height flex-column" justify="space-between">

                                            <p class="mt-4 subheading text-left">{{ item.title }}</p>

                                            <div>
                                                <p class="ma-0 body-1 font-weight-bold font-italic text-left">{{ item.text }}</p>
                                                <p class="caption font-weight-medium font-italic text-left">{{ item.subtext }}</p>
                                            </div>

                                            <div class="align-self-center">
                                                <v-btn 
                                                v-for="(icon, index) in icons" 
                                                :key="index" 
                                                :class="{ 'show-btns': hover }"
                                                color="transparent"
                                                icon
                                                >
                                                    <v-icon
                                                    :class="{'show-btns': hover}"
                                                    color="transparent"
                                                    >
                                                        {{ icon }}
                                                    </v-icon>
                                                </v-btn>
                                            </div>
                                        </v-row>
                                    </v-card-title>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </template>
            </v-row>
    </v-container>
        
</template>
<script>
// @ is an alias to /src
let d = new Date();
let days = ["Domenichi", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabadì"];

export default {
    
    data: () => ({
        search: '',
        icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
        items: [
            {
            title: 'Probabile clickbait',
            text: "Video del " + days[d.getDay()],
            subtext: 'Video di uno youtuber storto',
            img: 'https://miro.medium.com/max/1280/1*2oszyW4ja3z9-VLfTjBwFA.jpeg',
            },
            {
            title: 'Sgrammaticando si impara',
            text: 'Come fossero i giocatori senza denti',
            subtext: "L'ombra del fratello deficiente",
            img: 'https://i.ytimg.com/vi/yoJ_x8lO100/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFUTCNr98FGk4Q794HzZIEelWZqw',
            },
            {
            title: 'Lo Fi',
            text: 'Relax Beats',
            subtext: 'Chill beats to mellow you out.',
            img: 'https://www.soundwall.it/app/uploads/2018/04/Schermata-2018-04-27-alle-19.14.57-770x408.png',
            },
            {
            title: 'Unico video decente',
            text: 'Ovviamente mio lol',
            subtext: "anche se non ho mai pubblicato su youtube per questo non ha un'immagine lol",
            //img: 'https://cdn.vox-cdn.com/thumbor/6J3WM48-xsYlIK6VVobexsmqQoc=/0x0:2400x1600/920x613/filters:focal(1008x608:1392x992):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65517540/01_Twitch_Logo.0.jpg',
            },
            {
            title: 'Rip dudubi',
            text: "HELLO SURFSHARK",
            subtext: "CERBEROOOOO POPOPOPODCAST",
            img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7f9daee1-da6b-414a-adf3-9d46ad090f39-profile_image-300x300.jpg',
            },
        ],
        transparent: 'rgba(255, 255, 255, 0)',
    }),

    computed: {
        filteredItems: function(){
            return this.items.filter((item) => {
                return item.title.match(this.search)
            }
        )}
    }
}
</script>
