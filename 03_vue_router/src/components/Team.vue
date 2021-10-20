<template>
    <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th class="px-4 py-3">Name</th>
                            <th class="px-4 py-3">FIFA RANKING</th>
                            <th class="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <td></td>
                        <tr class="text-gray-700" v-for="item in this.countries" :key="item.name">
                            <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                        <img class="object-cover w-full h-full rounded-full" v-bind:src="getImagePath(item.fileName)" alt="" loading="lazy" />
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-black">{{ item.name }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">{{ item.fifaRank }}</td>
                            <td class="px-4 py-3 text-xs border">
                                <span v-bind:class="setStatusClass(item.roundRank)"> {{ setStatusMessage(item.roundRank) }} </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            team: '',
            countries: [
                {
                    name: 'IRAN',
                    fileName: 'iran.png',
                    fifaRank: '22',
                    roundRank: 1
                },
                {
                    name: 'Repulic Of Korea',
                    fileName: 'korea.svg',
                    fifaRank: '36',
                    roundRank: 2
                },
                {
                    name: 'UAE',
                    fileName: 'uae.png',
                    fifaRank: '69',
                    roundRank: 4
                },
                {
                    name: 'IRAQ',
                    fileName: 'iraq.png',
                    fifaRank: '72',
                    roundRank: 5
                },
                {
                    name: 'LEBANNON',
                    fileName: 'lebannon.svg',
                    fifaRank: '97',
                    roundRank: 3
                },
                {
                    name: 'SYRIA',
                    fileName: 'syria.png',
                    fifaRank: '81',
                    roundRank: 6
                }
            ]
        };
    },
    methods: {
        /**
         * 이미지 리소스 경로 반환
         * @param {string} fileName : 이미지 파일 명
         */
        getImagePath(fileName) {
            return require('../assets/countries_image/' + fileName);
        },
        /**
         * 클래스 바인딩
         * @param {number} rank : 라운드 순위 (3위 이상 진출 가능)
         */
        setStatusClass(rank) {
            let bindClass = '';
            if (rank <= 2) {
                //진출 가능
                bindClass = 'px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm';
            } else if (rank === 3) {
                //플레이오프 진출
                bindClass = 'px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm';
            } else {
                //탈락
                bindClass = 'px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm';
            }

            return bindClass;
        },
        /**
         * 텍스트 바인딩
         * @param {number} rank : 라운드 순위 (3위 이상 진출 가능)
         */
        setStatusMessage(rank) {
            let message = '';
            if (rank <= 2) {
                //진출 가능
                message = '진출 가능';
            } else if (rank === 3) {
                //플레이오프 진출
                message = '플레이오프';
            } else {
                //탈락
                message = '탈락';
            }

            return message;
        }
    }
};
</script>

<style scoped></style>
