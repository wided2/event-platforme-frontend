import React, { useState, useEffect } from "react";

const Commentaire = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});

  useEffect(() => {
    console.log("✅ Composant Commentaire monté !");
  }, []);

  // Ajouter un commentaire principal
  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: comment,
      replies: [], // Liste des réponses
    };

    setComments([...comments, newComment]); // Ajout à la fin de la liste
    setComment("");

    console.log("🔹 Nouveau commentaire ajouté :", newComment);
  };

  // Mettre à jour le texte de la réponse
  const handleReplyChange = (commentId, text) => {
    setReplies({ ...replies, [commentId]: text });
  };

  // Ajouter une réponse à un commentaire
  const handleAddReply = (e, commentId) => {
    e.preventDefault();
    if (!replies[commentId] || replies[commentId].trim() === "") return;

    const newReply = {
      id: Date.now(),
      text: replies[commentId],
    };

    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] } // Ajoute à la fin
          : comment
      )
    );

    setReplies({ ...replies, [commentId]: "" });

    console.log(`💬 Réponse ajoutée au commentaire ${commentId}:`, newReply);
  };

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="container mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Laissez un commentaire</h2>

        {/* Formulaire pour ajouter un commentaire */}
        <form onSubmit={handleAddComment} className="mb-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Écrivez votre commentaire ici..."
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Publier
          </button>
        </form>

        {/* Liste des commentaires */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Commentaires :</h3>
          {comments.length === 0 ? (
            <p className="text-gray-600">Aucun commentaire pour le moment.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
                <p className="text-gray-800">{comment.text}</p>

                {/* Formulaire de réponse */}
                <form onSubmit={(e) => handleAddReply(e, comment.id)} className="mt-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Répondre à ce commentaire..."
                    value={replies[comment.id] || ""}
                    onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-gray-400 hover:bg-gray-500 text-white py-1 px-4 rounded-lg transition duration-300"
                  >
                    Répondre
                  </button>
                </form>

                {/* Affichage des réponses */}
                {comment.replies.length > 0 && (
                  <div className="ml-6 mt-3 border-l-2 border-gray-300 pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-200 p-3 rounded-lg mb-2 shadow-sm">
                        <p className="text-gray-700">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Commentaire;
 