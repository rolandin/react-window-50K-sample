import React from 'react'

const Row = ({ data, index, style }) => {
    const item = data[index]
    return (
        <div style={style}>
            <div className="text-xl font-semibold text-purple-500">R{item.title}</div>
            <div className="text-xs text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, officia assumenda? Officiis laudantium ad repellat magnam dolore similique quae nemo, repellendus nesciunt quasi vero dolores cum numquam reprehenderit iste quisquam.</div>
            <div className="rounded-lg shadow-lg p-6 flex flex-row">
                <div>
                    <img
                        src="https://source.unsplash.com/w6caoaJzXIE/170x100"
                        alt="face picture"
                        className="rounded-md" />
                </div>
                <div className="flex flex-row">
                    <div className="text-4xl text-gray-300 ml-3">INDEX</div>
                    <div className="text-4xl text-purple-500 ml-3 font-semibold">{index}</div>
                </div>
            </div>
        </div>
    )
}
export default Row;