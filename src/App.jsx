import React from 'react'
import Card from './components/Card/Card'
import CardBody from './components/Card/CardBody'
import CardFooter from './components/Card/CardFooter'
import CardHeader from './components/Card/CardHeader'
import CardImg from './components/Card/CardImg'
import { Lista } from './components/Lista'
import { frameworks, languages, users } from './data'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Lista data={languages} />
                    <Lista data={frameworks} />
                </div>
            </div>
            <div className="row">
                {
                    users.map((user) => {
                        return (
                            <div className="col-md-4 py-2" key={user.id}>
                                <Card>
                                    <CardHeader>
                                        <h4 className="card-title">
                                            User {user.id}
                                        </h4>
                                    </CardHeader>
                                    <CardImg src={user.avatar} />
                                    <CardBody className={"card-body"}>
                                        <p className="card-text">{user.name}</p>
                                    </CardBody>
                                    <CardFooter>
                                        <p>&copy; 2023</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card>
                        <CardImg src={"https://picsum.photos/id/237/300/200"} />
                        <CardBody className={"card-body"}>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <CardFooter>
                            <p>&copy; 2023</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <CardImg src={"https://picsum.photos/id/876/300/200"} />
                        <CardBody className={"card-body"}>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <CardFooter>
                            <p>&copy; 2023</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <CardImg src={"https://picsum.photos/id/666/300/200"} />
                        <CardBody className={"card-body"}>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <CardFooter>
                            <p>&copy; 2023</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default App