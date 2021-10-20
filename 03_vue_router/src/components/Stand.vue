<template>
    <div class="w-2/3 mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse">
                <thead>
                    <tr>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Country</th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Matchs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-grey-lighter" v-for="(item, index) in this.leagueTable" :key="index">
                        <td class="py-4 px-6 border-b border-grey-light">{{ item.teamName }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            <router-link v-bind:to="`/team/${item.code}`" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{{
                                stringifyMatchArray(item.matchHistory)
                            }}</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            leagueTable: [
                {
                    code: 'irn',
                    teamName: 'Iran',
                    matchHistory: ['D', 'W', 'W', 'W']
                },
                {
                    code: 'kor',
                    teamName: 'Repulic Of Korea',
                    matchHistory: ['D', 'W', 'W', 'D']
                },
                {
                    code: 'lib',
                    teamName: 'Lebannon',
                    matchHistory: ['W', 'D', 'L', 'D']
                },
                {
                    code: 'uae',
                    teamName: 'UAE',
                    matchHistory: ['D', 'L', 'D', 'D']
                },
                {
                    code: 'irq',
                    teamName: 'Iraq',
                    matchHistory: ['D', 'D', 'L', 'D']
                },
                {
                    code: 'syr',
                    teamName: 'Syria',
                    matchHistory: ['L', 'L', 'D', 'L']
                }
            ]
        };
    },
    methods: {
        /**
         * 배열 문자열로 변환
         * @param {array} array : 최근 경기 배열
         */
        stringifyMatchArray: function (array) {
            return array.join('-');
        }
    }
};
</script>

<style></style>
