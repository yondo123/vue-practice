<template>
    <div class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
        <div v-bind:class="setClass(this.info.teamColor)"></div>
        <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img class="object-cover w-full h-full" v-bind:src="getImagePath(this.info.fileName)" />
        </div>
        <div class="mt-16">
            <h1 class="text-lg text-center font-semibold">{{ this.info.fullName }}</h1>
            <p class="text-sm text-gray-600 text-center">{{ this.info.follower }} followers.</p>
        </div>
        <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
            <div
                v-for="(item, index) in this.info.tags"
                :key="index"
                class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: undefined,
            teams: {
                irn: {
                    fullName: 'Iran',
                    fileName: 'iran.png',
                    teamColor: 'bg-red-500',
                    tags: ['aggressive', 'Azmoun', 'Taremi'],
                    follower: '283748'
                },
                kor: {
                    fullName: 'Republic Of Korea',
                    fileName: 'korea.svg',
                    teamColor: 'bg-black',
                    tags: ['aggressive', 'SON', 'asian-tiger'],
                    follower: '11000234'
                },
                uae: {
                    fullName: 'United Arab Emirates',
                    fileName: 'uae.png',
                    teamColor: 'bg-green-700',
                    tags: ['aggressive', 'Azmoun', 'Taremi'],
                    follower: '92837'
                },
                irq: {
                    fullName: 'Iraq',
                    fileName: 'iraq.png',
                    teamColor: 'bg-black',
                    tags: ['darkhose', 'persistent'],
                    follower: '119004'
                },
                lib: {
                    fullName: 'Lebannon',
                    fileName: 'lebannon.svg',
                    teamColor: 'bg-green-200',
                    tags: ['defensive', 'Asian ambush'],
                    follower: '44982'
                },
                syr: {
                    fullName: 'Syria',
                    fileName: 'syria.png',
                    teamColor: 'bg-black',
                    tags: ['aggressive'],
                    follower: '8401'
                }
            }
        };
    },
    created() {
        this.info = this.teams[this.$route.params.id];
    },
    methods: {
        /**
         * 색상 클래스 지정
         * @param {string} color : 팀 컬러
         */
        setClass(color) {
            return `relative h-40 ${color}`;
        },

        /**
         * 이미지 리소스 경로 반환
         * @param {string} fileName : 이미지 파일 명
         */
        getImagePath(fileName) {
            return require('../assets/countries_image/' + fileName);
        }
    }
};
</script>

<style></style>
