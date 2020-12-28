import Walk from "./Walk";

function ListWalks({walks, deleteWalk}) {
    let sortWalks;
    if(walks.length > 0) sortWalks = walks.sort((a,b) => b.date - a.date)
    else return(<></>);

    return (
        <ul className='list'>
            {sortWalks.map(e => <Walk key={e.id} date={e.date} distanse={e.distance} id={e.id} deleteWalk={deleteWalk}/>)}
        </ul>
    );
}

export default ListWalks;
