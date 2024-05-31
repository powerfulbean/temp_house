export const quetions = () => {
    return new Promise(
        (resolve, reject) => {
            fetch('questions.txt')
            .then(response => 
                response.text())
                .then(data => {
                    const lines = data.split('\n').map( line =>
                        line.trim());
                    resolve(lines);
                })
        }
    )
};
