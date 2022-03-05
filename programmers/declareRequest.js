const solution = (ids, reports, k) => {
    const answer = new Array(ids.length).fill(0);

    const report_list = {};

    ids.forEach((id) => {
        report_list[id] = [];
    })

    reports.forEach((report) => {
        const [user, ban] = report.split(' ');

        if (!report_list[ban].includes(user)) {
            report_list[ban].push(user);
        }
    });

    console.log(report_list)

    for (const key in report_list) {
            if (report_list[key].length >= k) {
            report_list[key].forEach((user) => {
                answer[ids.indexOf(user)] += 1;
            })
        }
    }


    return answer;
}
console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))
console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))
