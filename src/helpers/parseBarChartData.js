function parseData(data) {
    const labels = [];
    const values = [];

    try {
        data.forEach(yearObj => {
            Object.values(yearObj).forEach(months => {
                months.forEach(monthObj => {
                    Object.values(monthObj).forEach(days => {
                        days.forEach(dayObj => {
                            const date = Object.keys(dayObj)[0].split(" ,")[0];
                            const value = Object.values(dayObj)[0];
                            labels.push(date);
                            values.push(value);
                        })
                    })
                })
            })
        })

        const sorted = labels.map((label, i) => ({ label, value: values[i] }))
            .sort((a, b) => new Date(a.label) - new Date(b.label));

        return {
            labels: sorted.map(item => {
                const date = new Date(item.label);
                return `${date.toLocaleDateString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
            }),
            values: sorted.map(item => item.value)
        }

    } catch (error) {
        return { labels: [], values: [], error: error.message };
    }
}

export default parseData;