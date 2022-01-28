const express = require('express');
const router = express.Router();

const PecasController = require('./controllers/PecasController');

router.get('/pecas',PecasController.buscarTodas);
router.get('/pecas/:codigo', PecasController.buscarUm);
router.post('/pecas', PecasController.inserir);
router.put('/pecas/:codigo', PecasController.alterar);
router.delete('/pecas/:codigo', PecasController.excluir);
router.get('/pecas/verificar/:codigo', PecasController.verificar)
router.get('/pecas/verificarcompativel/:codigo', PecasController.verificarPecasComp)

router.post('/pecas/compativel', PecasController.inserirCompativel)
router.post('/pecas/compatibilidade', PecasController.inserirCompatibilidade)

module.exports = router;