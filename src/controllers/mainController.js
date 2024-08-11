import listProjects from './listProjects.js';

// CONTROLADOR HOME
export const renderHome = (req, res) => {
    res.render('index', { title: 'Inicio',listProjects });
};
//----------------------

// CONTROLADOR ACERCA DE
export const renderAbout = (req, res) => {
    res.render('about', { title: 'Acerca de' });
};
//----------------------