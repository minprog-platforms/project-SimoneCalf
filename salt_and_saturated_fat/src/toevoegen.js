const Toevoegen = () => {
    return (
        <div className="toevoegen">
            <h2>Voeg een voedingsmiddel toe</h2>
            <form>
                <label>voedingsmiddel</label>
                <input
                    type="text"
                    required
                />
                <label>hoeveelheid zout per</label>
                <select>
                    <option value='stuk'>stuk</option>
                    <option value='100 gram'>100 gram</option>
                </select>
                <input
                    type="text"
                    required
                />
                <label>hoeveelheid verzadigd vet per</label>
                <select>
                    <option value='stuk'>stuk</option>
                    <option value='100 gram'>100 gram</option>
                </select>
                <input
                    type="text"
                    required
                />
                <label>hoeveelheid die je gaat eten of drinken in</label>
                <select>
                    <option value='stuks'>stuks</option>
                    <option value='gram'>gram</option>
                </select>
                <input
                    type="text"
                    required
                />
            </form>
        </div>
    );
}

export default Toevoegen;