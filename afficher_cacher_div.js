function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('button_'+id).innerHTML='Voir moins';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('button_'+id).innerHTML='Voir plus';
    }
    return true;
}