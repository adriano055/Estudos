SELECT 
    regiao as 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC

SELECT AVG(populacao) AS 'Média da população'
FROM estados
