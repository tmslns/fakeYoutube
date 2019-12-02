<template>
    <nav>
    <v-app-bar app clipped-left color="red" dense>

        <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase">
            <router-link to="/">
            <v-img src="@/components/ytpng.png" width="100"></v-img>
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-chip class="ma-2" dark :ripple="false">
            <v-avatar left>
                <v-icon>mdi-magnify</v-icon>
            </v-avatar>
            <v-text-field
            label="Search"
            hide-details
            v-model="search"
            single-line
            dense
            filled
            color="black"
            class="grey--text text-lighten"
            type="text"
            clearable
            @keyup="filteredItems();"
            >
            </v-text-field>
        </v-chip>
        <!-- <v-btn
        depressed
        tile
        height="40"
        class="ma-0 grey text-lighten-5"
        @click="show"
        >
        
        <v-icon>mdi-magnify</v-icon>
        
        </v-btn> -->

        <v-spacer></v-spacer>

        <v-btn icon v-on="on">
            <v-icon>mdi-video-plus</v-icon>
        </v-btn>
        <v-btn icon v-on="on">
            <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-menu left bottom>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
            >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </v-app-bar>

    <v-navigation-drawer floating v-model="drawer" absolute permanent :mini-variant.sync="mini" app clipped style="position:fixed;">
        <!-- <v-app-bar height="40" flat class="text-uppercase" dark> -->
            <!-- <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon> -->
        <!-- </v-app-bar> -->

        <v-list dense>
            <v-list-item-group>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon v-text="link.icon" class="grey--text"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="link.text" class="font-weight-medium white--text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>

    </nav>
</template>


<script>
export default {
    data() {
        return {
            search: "",
            drawer: false,
            mini: true,
            links: [
                {icon: 'mdi-home', text: 'Discover', route: '/'},
                {icon: 'mdi-folder', text: 'Raccolta', route: '/raccolta'},
                {icon: 'mdi-history', text: 'Cronologia', route: '/cronologia'},
            ]
        }
    }
}
</script>