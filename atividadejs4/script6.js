const idade = [16, 48, 23, 22, 45, 8, 12];

const idade18 = idade.filter(idade => idade >= 18);

idade18.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
});
